package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/utils"
)

type Pullrequests struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewPullrequests(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Pullrequests {
	return &Pullrequests{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Removes a default reviewer from the repository.
func (s *Pullrequests) DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
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

// DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove - Redact the authenticated user's approval of the specified pull
// request.
func (s *Pullrequests) DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
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
	}

	return res, nil
}

// DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID - Deletes a specific pull request comment.
func (s *Pullrequests) DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 403:
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
	}

	return res, nil
}

func (s *Pullrequests) DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges(ctx context.Context, request operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest) (*operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 204:
	case httpRes.StatusCode == 401:
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
	}

	return res, nil
}

// GetPullrequestsForCommit - Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
func (s *Pullrequests) GetPullrequestsForCommit(ctx context.Context, request operations.GetPullrequestsForCommitRequest) (*operations.GetPullrequestsForCommitResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests", request.PathParams)

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

	res := &operations.GetPullrequestsForCommitResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
		}
	case httpRes.StatusCode == 202:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
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
	}

	return res, nil
}

// GetPullrequestsSelectedUser - Returns all pull requests authored by the specified user.
//
// By default only open pull requests are returned. This can be controlled
// using the `state` query parameter. To retrieve pull requests that are
// in one of multiple states, repeat the `state` parameter for each
// individual state.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../../../meta/filtering) for more details.
func (s *Pullrequests) GetPullrequestsSelectedUser(ctx context.Context, request operations.GetPullrequestsSelectedUserRequest) (*operations.GetPullrequestsSelectedUserResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/pullrequests/{selected_user}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetPullrequestsSelectedUserResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
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
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDefaultReviewers - Returns the repository's default reviewers.
//
// These are the users that are automatically added as reviewers on every
// new pull request that is created.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugDefaultReviewers(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Returns the specified reviewer.
//
// This can be used to test whether a user is among the repository's
// default reviewers list. A 404 indicates that that specified user is not
// a default reviewer.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) (*operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
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

// GetRepositoriesWorkspaceRepoSlugPullrequests - Returns all pull requests on the specified repository.
//
// By default only open pull requests are returned. This can be controlled
// using the `state` query parameter. To retrieve pull requests that are
// in one of multiple states, repeat the `state` parameter for each
// individual state.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../../../meta/filtering) for more details.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequests(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequests
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequests = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
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

// GetRepositoriesWorkspaceRepoSlugPullrequestsActivity - Returns a paginated list of the pull request's activity log.
//
// This handler serves both a v20 and internal endpoint. The v20 endpoint
// returns reviewer comments, updates, approvals and request changes. The internal
// endpoint includes those plus tasks and attachments.
//
// Comments created on a file or a line of code have an inline property.
//
// Comment example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "comment": {
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
//	                    }
//	                },
//	                "deleted": false,
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "content": {
//	                    "raw": "inline with to a dn from lines",
//	                    "markup": "markdown",
//	                    "html": "<p>inline with to a dn from lines</p>",
//	                    "type": "rendered"
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "updated_on": "2019-09-27T00:33:46.055384+00:00",
//	                "inline": {
//	                    "context_lines": "",
//	                    "to": null,
//	                    "path": "",
//	                    "outdated": false,
//	                    "from": 211
//	                },
//	                "type": "pullrequest_comment",
//	                "id": 118571088
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Updates include a state property of OPEN, MERGED, or DECLINED.
//
// Update example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "update": {
//	                "description": "",
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
//	                "destination": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "6a2c16e4a152",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "master"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "reason": "",
//	                "source": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "728c8bad1813",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "username/NONE-add-onClick-prop-for-accessibility"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "state": "OPEN",
//	                "author": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "date": "2019-05-10T06:48:25.305565+00:00"
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Approval example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "approval": {
//	                "date": "2019-09-27T00:37:19.849534+00:00",
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                }
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsActivity(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/activity", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
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

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID - Returns the specified pull request.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
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

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity - Returns a paginated list of the pull request's activity log.
//
// This handler serves both a v20 and internal endpoint. The v20 endpoint
// returns reviewer comments, updates, approvals and request changes. The internal
// endpoint includes those plus tasks and attachments.
//
// Comments created on a file or a line of code have an inline property.
//
// Comment example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "comment": {
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088"
//	                    }
//	                },
//	                "deleted": false,
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "content": {
//	                    "raw": "inline with to a dn from lines",
//	                    "markup": "markdown",
//	                    "html": "<p>inline with to a dn from lines</p>",
//	                    "type": "rendered"
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "created_on": "2019-09-27T00:33:46.039178+00:00",
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "updated_on": "2019-09-27T00:33:46.055384+00:00",
//	                "inline": {
//	                    "context_lines": "",
//	                    "to": null,
//	                    "path": "",
//	                    "outdated": false,
//	                    "from": 211
//	                },
//	                "type": "pullrequest_comment",
//	                "id": 118571088
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Updates include a state property of OPEN, MERGED, or DECLINED.
//
// Update example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "update": {
//	                "description": "",
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it",
//	                "destination": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "6a2c16e4a152",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "master"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "reason": "",
//	                "source": {
//	                    "commit": {
//	                        "type": "commit",
//	                        "hash": "728c8bad1813",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813"
//	                            }
//	                        }
//	                    },
//	                    "branch": {
//	                        "name": "username/NONE-add-onClick-prop-for-accessibility"
//	                    },
//	                    "repository": {
//	                        "name": "Atlaskit-MK-2",
//	                        "type": "repository",
//	                        "full_name": "atlassian/atlaskit-mk-2",
//	                        "links": {
//	                            "self": {
//	                                "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2"
//	                            },
//	                            "html": {
//	                                "href": "https://bitbucket.org/atlassian/atlaskit-mk-2"
//	                            },
//	                            "avatar": {
//	                                "href": "https://bytebucket.org/ravatar/%7B%7D?ts=js"
//	                            }
//	                        },
//	                        "uuid": "{}"
//	                    }
//	                },
//	                "state": "OPEN",
//	                "author": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                },
//	                "date": "2019-05-10T06:48:25.305565+00:00"
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
//
// Approval example:
// ```
//
//	{
//	    "pagelen": 20,
//	    "values": [
//	        {
//	            "approval": {
//	                "date": "2019-09-27T00:37:19.849534+00:00",
//	                "pullrequest": {
//	                    "type": "pullrequest",
//	                    "id": 5695,
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                        }
//	                    },
//	                    "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	                },
//	                "user": {
//	                    "display_name": "Name Lastname",
//	                    "uuid": "{}",
//	                    "links": {
//	                        "self": {
//	                            "href": "https://bitbucket.org/!api/2.0/users/%7B%7D"
//	                        },
//	                        "html": {
//	                            "href": "https://bitbucket.org/%7B%7D/"
//	                        },
//	                        "avatar": {
//	                            "href": "https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128"
//	                        }
//	                    },
//	                    "type": "user",
//	                    "nickname": "Name",
//	                    "account_id": ""
//	                }
//	            },
//	            "pull_request": {
//	                "type": "pullrequest",
//	                "id": 5695,
//	                "links": {
//	                    "self": {
//	                        "href": "https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695"
//	                    },
//	                    "html": {
//	                        "href": "https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695"
//	                    }
//	                },
//	                "title": "username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it"
//	            }
//	        }
//	    ]
//	}
//
// ```
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivity(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
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

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments - Returns a paginated list of the pull request's comments.
//
// This includes both global, inline comments and replies.
//
// The default sorting is oldest to newest and can be overridden with
// the `sort` query parameter.
//
// This endpoint also supports filtering and sorting of the results. See
// [filtering and sorting](../../../../../../meta/filtering) for more
// details.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedPullrequestComments
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedPullrequestComments = out
		}
	case httpRes.StatusCode == 403:
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
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID - Returns a specific pull request comment.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PullrequestComment = out
		}
	case httpRes.StatusCode == 403:
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
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits - Returns a paginated list of the pull request's commits.
//
// These are the commits that are being merged into the destination
// branch when the pull requests gets accepted.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommits(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
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

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff - Redirects to the [repository diff](../../diff/%7Bspec%7D)
// with the revspec that corresponds to the pull request.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiff(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat - Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
// with the revspec that corresponds to the pull request.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstat(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID - When merging a pull request takes too long, the client receives a
// task ID along with a 202 status code. The task ID can be used in a call
// to this endpoint to check the status of a merge task.
//
// ```
// curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
// ```
//
// If the merge task is not yet finished, a PENDING status will be returned.
//
// ```
// HTTP/2 200
//
//	{
//	    "task_status": "PENDING",
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
//	        }
//	    }
//	}
//
// ```
//
// If the merge was successful, a SUCCESS status will be returned.
//
// ```
// HTTP/2 200
//
//	{
//	    "task_status": "SUCCESS",
//	    "links": {
//	        "self": {
//	            "href": "https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>"
//	        }
//	    },
//	    "merge_result": <the merged pull request object>
//	}
//
// ```
//
// If the merge task failed, an error will be returned.
//
// ```
//
//	{
//	    "type": "error",
//	    "error": {
//	        "message": "<error message>"
//	    }
//	}
//
// ```
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskID(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch - Redirects to the [repository patch](../../patch/%7Bspec%7D)
// with the revspec that corresponds to pull request.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatch(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 302:
	}

	return res, nil
}

// GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses - Returns all statuses (e.g. build results) for the given pull
// request.
func (s *Pullrequests) GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatuses(ctx context.Context, request operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest) (*operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.PaginatedCommitstatuses
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PaginatedCommitstatuses = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 404:
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

// PostRepositoriesWorkspaceRepoSlugPullrequests - Creates a new pull request where the destination repository is
// this repository and the author is the authenticated user.
//
// The minimum required fields to create a pull request are `title` and
// `source`, specified by a branch name.
//
// ```
//
//	curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
//	    -u my-username:my-password \
//	    --request POST \
//	    --header 'Content-Type: application/json' \
//	    --data '{
//	        "title": "My Title",
//	        "source": {
//	            "branch": {
//	                "name": "staging"
//	            }
//	        }
//	    }'
//
// ```
//
// If the pull request's `destination` is not specified, it will default
// to the `repository.mainbranch`. To open a pull request to a
// different branch, say from a feature branch to a staging branch,
// specify a `destination` (same format as the `source`):
//
// ```
//
//	{
//	    "title": "My Title",
//	    "source": {
//	        "branch": {
//	            "name": "my-feature-branch"
//	        }
//	    },
//	    "destination": {
//	        "branch": {
//	            "name": "staging"
//	        }
//	    }
//	}
//
// ```
//
// Reviewers can be specified by adding an array of user objects as the
// `reviewers` property.
//
// ```
//
//	{
//	    "title": "My Title",
//	    "source": {
//	        "branch": {
//	            "name": "my-feature-branch"
//	        }
//	    },
//	    "reviewers": [
//	        {
//	            "uuid": "{504c3b62-8120-4f0c-a7bc-87800b9d6f70}"
//	        }
//	    ]
//	}
//
// ```
//
// Other fields:
//
// * `description` - a string
// * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
func (s *Pullrequests) PostRepositoriesWorkspaceRepoSlugPullrequests(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
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
	case httpRes.StatusCode == 401:
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

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove - Approve the specified pull request as the authenticated user.
func (s *Pullrequests) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApprove(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Participant = out
		}
	case httpRes.StatusCode == 401:
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
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments - Creates a new pull request comment.
//
// Returns the newly created pull request comment.
func (s *Pullrequests) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDComments(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 201:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PullrequestComment = out
		}
	case httpRes.StatusCode == 403:
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
	}

	return res, nil
}

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline - Declines the pull request.
func (s *Pullrequests) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDecline(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 555:
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

// PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge - Merges the pull request.
func (s *Pullrequests) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMerge(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
		}
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 555:
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

func (s *Pullrequests) PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChanges(ctx context.Context, request operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest) (*operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "POST", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Participant = out
		}
	case httpRes.StatusCode == 401:
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
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername - Adds the specified user to the repository's list of default
// reviewers.
//
// This method is idempotent. Adding a user a second time has no effect.
func (s *Pullrequests) PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsername(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) (*operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "PUT", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	default:
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

// PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID - Mutates the specified pull request.
//
// This can be used to change the pull request's branches or description.
//
// Only open pull requests can be mutated.
func (s *Pullrequests) PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Pullrequest = out
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
	case httpRes.StatusCode == 401:
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
	}

	return res, nil
}

// PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID - Updates a specific pull request comment.
func (s *Pullrequests) PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentID(ctx context.Context, request operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) (*operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "PUT", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out map[string]interface{}
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.PullrequestComment = out
		}
	case httpRes.StatusCode == 403:
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
	}

	return res, nil
}
