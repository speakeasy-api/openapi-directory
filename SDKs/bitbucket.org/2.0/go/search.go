package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Search struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewSearch(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Search {
	return &Search{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetUsersSelectedUserSearchCode - Search for code in the repositories of the specified user.
//
// Searching across all repositories:
//
// ```
// curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 2,
//	      "content_matches": [
//	        {
//	          "lines": [
//	            {
//	              "line": 2,
//	              "segments": []
//	            },
//	            {
//	              "line": 3,
//	              "segments": [
//	                {
//	                  "text": "def "
//	                },
//	                {
//	                  "text": "foo",
//	                  "match": true
//	                },
//	                {
//	                  "text": "():"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 4,
//	              "segments": [
//	                {
//	                  "text": "    print(\"snek\")"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 5,
//	              "segments": []
//	            }
//	          ]
//	        }
//	      ],
//	      "path_matches": [
//	        {
//	          "text": "src/"
//	        },
//	        {
//	          "text": "foo",
//	          "match": true
//	        },
//	        {
//	          "text": ".py"
//	        }
//	      ],
//	      "file": {
//	        "path": "src/foo.py",
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        }
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Note that searches can match in the file's text (`content_matches`),
// the path (`path_matches`), or both as in the example above.
//
// You can use the same syntax for the search query as in the UI, e.g.
// to only search within a specific repository:
//
// ```
// curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo+repo:demo'
// # results from the "demo" repository
// ```
//
// Similar to other APIs, you can request more fields using a
// `fields` query parameter. E.g. to get some more information about
// the repository of matched files (the `%2B` is a URL-encoded `+`):
//
// ```
//
//	curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code'\
//	     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 1,
//	      "content_matches": [...],
//	      "path_matches": [...],
//	      "file": {
//	        "commit": {
//	          "type": "commit",
//	          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            }
//	          },
//	          "repository": {
//	            "name": "demo",
//	            "type": "repository",
//	            "full_name": "my-workspace/demo",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/my-workspace/demo"
//	              },
//	              "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
//	              }
//	            },
//	            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
//	          }
//	        },
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        },
//	        "path": "src/foo.py"
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
func (s *Search) GetUsersSelectedUserSearchCode(ctx context.Context, request operations.GetUsersSelectedUserSearchCodeRequest) (*operations.GetUsersSelectedUserSearchCodeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{selected_user}/search/code", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetUsersSelectedUserSearchCodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchResultPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchResultPage = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// GetWorkspacesWorkspaceSearchCode - Search for code in the repositories of the specified workspace.
//
// Searching across all repositories:
//
// ```
// curl 'https://api.bitbucket.org/2.0/workspaces/workspace_slug_or_uuid/search/code?search_query=foo'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 2,
//	      "content_matches": [
//	        {
//	          "lines": [
//	            {
//	              "line": 2,
//	              "segments": []
//	            },
//	            {
//	              "line": 3,
//	              "segments": [
//	                {
//	                  "text": "def "
//	                },
//	                {
//	                  "text": "foo",
//	                  "match": true
//	                },
//	                {
//	                  "text": "():"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 4,
//	              "segments": [
//	                {
//	                  "text": "    print(\"snek\")"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 5,
//	              "segments": []
//	            }
//	          ]
//	        }
//	      ],
//	      "path_matches": [
//	        {
//	          "text": "src/"
//	        },
//	        {
//	          "text": "foo",
//	          "match": true
//	        },
//	        {
//	          "text": ".py"
//	        }
//	      ],
//	      "file": {
//	        "path": "src/foo.py",
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        }
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Note that searches can match in the file's text (`content_matches`),
// the path (`path_matches`), or both as in the example above.
//
// You can use the same syntax for the search query as in the UI, e.g.
// to only search within a specific repository:
//
// ```
// curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code?search_query=foo+repo:demo'
// # results from the "demo" repository
// ```
//
// Similar to other APIs, you can request more fields using a
// `fields` query parameter. E.g. to get some more information about
// the repository of matched files (the `%2B` is a URL-encoded `+`):
//
// ```
//
//	curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code'\
//	     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 1,
//	      "content_matches": [...],
//	      "path_matches": [...],
//	      "file": {
//	        "commit": {
//	          "type": "commit",
//	          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            }
//	          },
//	          "repository": {
//	            "name": "demo",
//	            "type": "repository",
//	            "full_name": "my-workspace/demo",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/my-workspace/demo"
//	              },
//	              "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
//	              }
//	            },
//	            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
//	          }
//	        },
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        },
//	        "path": "src/foo.py"
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
func (s *Search) GetWorkspacesWorkspaceSearchCode(ctx context.Context, request operations.GetWorkspacesWorkspaceSearchCodeRequest) (*operations.GetWorkspacesWorkspaceSearchCodeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/workspaces/{workspace}/search/code", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetWorkspacesWorkspaceSearchCodeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchResultPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchResultPage = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}

// SearchAccount - Search for code in the repositories of the specified team.
//
// Searching across all repositories:
//
// ```
// curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 2,
//	      "content_matches": [
//	        {
//	          "lines": [
//	            {
//	              "line": 2,
//	              "segments": []
//	            },
//	            {
//	              "line": 3,
//	              "segments": [
//	                {
//	                  "text": "def "
//	                },
//	                {
//	                  "text": "foo",
//	                  "match": true
//	                },
//	                {
//	                  "text": "():"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 4,
//	              "segments": [
//	                {
//	                  "text": "    print(\"snek\")"
//	                }
//	              ]
//	            },
//	            {
//	              "line": 5,
//	              "segments": []
//	            }
//	          ]
//	        }
//	      ],
//	      "path_matches": [
//	        {
//	          "text": "src/"
//	        },
//	        {
//	          "text": "foo",
//	          "match": true
//	        },
//	        {
//	          "text": ".py"
//	        }
//	      ],
//	      "file": {
//	        "path": "src/foo.py",
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        }
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Note that searches can match in the file's text (`content_matches`),
// the path (`path_matches`), or both as in the example above.
//
// You can use the same syntax for the search query as in the UI, e.g.
// to only search within a specific repository:
//
// ```
// curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo+repo:demo'
// # results from the "demo" repository
// ```
//
// Similar to other APIs, you can request more fields using a
// `fields` query parameter. E.g. to get some more information about
// the repository of matched files (the `%2B` is a URL-encoded `+`):
//
// ```
//
//	curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code'\
//	     '?search_query=foo&fields=%2Bvalues.file.commit.repository'
//
//	{
//	  "size": 1,
//	  "page": 1,
//	  "pagelen": 10,
//	  "query_substituted": false,
//	  "values": [
//	    {
//	      "type": "code_search_result",
//	      "content_match_count": 1,
//	      "content_matches": [...],
//	      "path_matches": [...],
//	      "file": {
//	        "commit": {
//	          "type": "commit",
//	          "hash": "ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b",
//	          "links": {
//	            "self": {
//	              "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            },
//	            "html": {
//	              "href": "https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b"
//	            }
//	          },
//	          "repository": {
//	            "name": "demo",
//	            "type": "repository",
//	            "full_name": "my-workspace/demo",
//	            "links": {
//	              "self": {
//	                "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo"
//	              },
//	              "html": {
//	                "href": "https://bitbucket.org/my-workspace/demo"
//	              },
//	              "avatar": {
//	                "href": "https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default"
//	              }
//	            },
//	            "uuid": "{850e1749-781a-4115-9316-df39d0600e7a}"
//	          }
//	        },
//	        "type": "commit_file",
//	        "links": {
//	          "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py"
//	          }
//	        },
//	        "path": "src/foo.py"
//	      }
//	    }
//	  ]
//	}
//
// ```
//
// Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
func (s *Search) SearchAccount(ctx context.Context, request operations.SearchAccountRequest) (*operations.SearchAccountResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/teams/{username}/search/code", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SearchAccountResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.SearchResultPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchResultPage = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	case httpRes.StatusCode == 429:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Error = out
		}
	}

	return res, nil
}
