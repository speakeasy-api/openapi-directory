import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Search:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_users_selected_user_search_code(self, request: operations.GetUsersSelectedUserSearchCodeRequest) -> operations.GetUsersSelectedUserSearchCodeResponse:
        r"""Search for code in the repositories of the specified user.
        
        Searching across all repositories:
        
        ```
        curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo'
        {
          \"size\": 1,
          \"page\": 1,
          \"pagelen\": 10,
          \"query_substituted\": false,
          \"values\": [
            {
              \"type\": \"code_search_result\",
              \"content_match_count\": 2,
              \"content_matches\": [
                {
                  \"lines\": [
                    {
                      \"line\": 2,
                      \"segments\": []
                    },
                    {
                      \"line\": 3,
                      \"segments\": [
                        {
                          \"text\": \"def \"
                        },
                        {
                          \"text\": \"foo\",
                          \"match\": true
                        },
                        {
                          \"text\": \"():\"
                        }
                      ]
                    },
                    {
                      \"line\": 4,
                      \"segments\": [
                        {
                          \"text\": \"    print(\\"snek\\")\"
                        }
                      ]
                    },
                    {
                      \"line\": 5,
                      \"segments\": []
                    }
                  ]
                }
              ],
              \"path_matches\": [
                {
                  \"text\": \"src/\"
                },
                {
                  \"text\": \"foo\",
                  \"match\": true
                },
                {
                  \"text\": \".py\"
                }
              ],
              \"file\": {
                \"path\": \"src/foo.py\",
                \"type\": \"commit_file\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"
                  }
                }
              }
            }
          ]
        }
        ```
        
        Note that searches can match in the file's text (`content_matches`),
        the path (`path_matches`), or both as in the example above.
        
        You can use the same syntax for the search query as in the UI, e.g.
        to only search within a specific repository:
        
        ```
        curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code?search_query=foo+repo:demo'
        # results from the \"demo\" repository
        ```
        
        Similar to other APIs, you can request more fields using a
        `fields` query parameter. E.g. to get some more information about
        the repository of matched files (the `%2B` is a URL-encoded `+`):
        
        ```
        curl 'https://api.bitbucket.org/2.0/users/{ed08f5e1-605b-4f4a-aee4-6c97628a673e}/search/code'\
             '?search_query=foo&fields=%2Bvalues.file.commit.repository'
        {
          \"size\": 1,
          \"page\": 1,
          \"pagelen\": 10,
          \"query_substituted\": false,
          \"values\": [
            {
              \"type\": \"code_search_result\",
              \"content_match_count\": 1,
              \"content_matches\": [...],
              \"path_matches\": [...],
              \"file\": {
                \"commit\": {
                  \"type\": \"commit\",
                  \"hash\": \"ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\",
                  \"links\": {
                    \"self\": {
                      \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"
                    },
                    \"html\": {
                      \"href\": \"https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"
                    }
                  },
                  \"repository\": {
                    \"name\": \"demo\",
                    \"type\": \"repository\",
                    \"full_name\": \"my-workspace/demo\",
                    \"links\": {
                      \"self\": {
                        \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo\"
                      },
                      \"html\": {
                        \"href\": \"https://bitbucket.org/my-workspace/demo\"
                      },
                      \"avatar\": {
                        \"href\": \"https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default\"
                      }
                    },
                    \"uuid\": \"{850e1749-781a-4115-9316-df39d0600e7a}\"
                  }
                },
                \"type\": \"commit_file\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"
                  }
                },
                \"path\": \"src/foo.py\"
              }
            }
          ]
        }
        ```
        
        Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{selected_user}/search/code", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUsersSelectedUserSearchCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResultPage])
                res.search_result_page = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_workspaces_workspace_search_code(self, request: operations.GetWorkspacesWorkspaceSearchCodeRequest) -> operations.GetWorkspacesWorkspaceSearchCodeResponse:
        r"""Search for code in the repositories of the specified workspace.
        
        Searching across all repositories:
        
        ```
        curl 'https://api.bitbucket.org/2.0/workspaces/workspace_slug_or_uuid/search/code?search_query=foo'
        {
          \"size\": 1,
          \"page\": 1,
          \"pagelen\": 10,
          \"query_substituted\": false,
          \"values\": [
            {
              \"type\": \"code_search_result\",
              \"content_match_count\": 2,
              \"content_matches\": [
                {
                  \"lines\": [
                    {
                      \"line\": 2,
                      \"segments\": []
                    },
                    {
                      \"line\": 3,
                      \"segments\": [
                        {
                          \"text\": \"def \"
                        },
                        {
                          \"text\": \"foo\",
                          \"match\": true
                        },
                        {
                          \"text\": \"():\"
                        }
                      ]
                    },
                    {
                      \"line\": 4,
                      \"segments\": [
                        {
                          \"text\": \"    print(\\"snek\\")\"
                        }
                      ]
                    },
                    {
                      \"line\": 5,
                      \"segments\": []
                    }
                  ]
                }
              ],
              \"path_matches\": [
                {
                  \"text\": \"src/\"
                },
                {
                  \"text\": \"foo\",
                  \"match\": true
                },
                {
                  \"text\": \".py\"
                }
              ],
              \"file\": {
                \"path\": \"src/foo.py\",
                \"type\": \"commit_file\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"
                  }
                }
              }
            }
          ]
        }
        ```
        
        Note that searches can match in the file's text (`content_matches`),
        the path (`path_matches`), or both as in the example above.
        
        You can use the same syntax for the search query as in the UI, e.g.
        to only search within a specific repository:
        
        ```
        curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code?search_query=foo+repo:demo'
        # results from the \"demo\" repository
        ```
        
        Similar to other APIs, you can request more fields using a
        `fields` query parameter. E.g. to get some more information about
        the repository of matched files (the `%2B` is a URL-encoded `+`):
        
        ```
        curl 'https://api.bitbucket.org/2.0/workspaces/my-workspace/search/code'\
             '?search_query=foo&fields=%2Bvalues.file.commit.repository'
        {
          \"size\": 1,
          \"page\": 1,
          \"pagelen\": 10,
          \"query_substituted\": false,
          \"values\": [
            {
              \"type\": \"code_search_result\",
              \"content_match_count\": 1,
              \"content_matches\": [...],
              \"path_matches\": [...],
              \"file\": {
                \"commit\": {
                  \"type\": \"commit\",
                  \"hash\": \"ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\",
                  \"links\": {
                    \"self\": {
                      \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"
                    },
                    \"html\": {
                      \"href\": \"https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"
                    }
                  },
                  \"repository\": {
                    \"name\": \"demo\",
                    \"type\": \"repository\",
                    \"full_name\": \"my-workspace/demo\",
                    \"links\": {
                      \"self\": {
                        \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo\"
                      },
                      \"html\": {
                        \"href\": \"https://bitbucket.org/my-workspace/demo\"
                      },
                      \"avatar\": {
                        \"href\": \"https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default\"
                      }
                    },
                    \"uuid\": \"{850e1749-781a-4115-9316-df39d0600e7a}\"
                  }
                },
                \"type\": \"commit_file\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"
                  }
                },
                \"path\": \"src/foo.py\"
              }
            }
          ]
        }
        ```
        
        Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/workspaces/{workspace}/search/code", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspacesWorkspaceSearchCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResultPage])
                res.search_result_page = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def search_account(self, request: operations.SearchAccountRequest) -> operations.SearchAccountResponse:
        r"""Search for code in the repositories of the specified team.
        
        Searching across all repositories:
        
        ```
        curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo'
        {
          \"size\": 1,
          \"page\": 1,
          \"pagelen\": 10,
          \"query_substituted\": false,
          \"values\": [
            {
              \"type\": \"code_search_result\",
              \"content_match_count\": 2,
              \"content_matches\": [
                {
                  \"lines\": [
                    {
                      \"line\": 2,
                      \"segments\": []
                    },
                    {
                      \"line\": 3,
                      \"segments\": [
                        {
                          \"text\": \"def \"
                        },
                        {
                          \"text\": \"foo\",
                          \"match\": true
                        },
                        {
                          \"text\": \"():\"
                        }
                      ]
                    },
                    {
                      \"line\": 4,
                      \"segments\": [
                        {
                          \"text\": \"    print(\\"snek\\")\"
                        }
                      ]
                    },
                    {
                      \"line\": 5,
                      \"segments\": []
                    }
                  ]
                }
              ],
              \"path_matches\": [
                {
                  \"text\": \"src/\"
                },
                {
                  \"text\": \"foo\",
                  \"match\": true
                },
                {
                  \"text\": \".py\"
                }
              ],
              \"file\": {
                \"path\": \"src/foo.py\",
                \"type\": \"commit_file\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"
                  }
                }
              }
            }
          ]
        }
        ```
        
        Note that searches can match in the file's text (`content_matches`),
        the path (`path_matches`), or both as in the example above.
        
        You can use the same syntax for the search query as in the UI, e.g.
        to only search within a specific repository:
        
        ```
        curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code?search_query=foo+repo:demo'
        # results from the \"demo\" repository
        ```
        
        Similar to other APIs, you can request more fields using a
        `fields` query parameter. E.g. to get some more information about
        the repository of matched files (the `%2B` is a URL-encoded `+`):
        
        ```
        curl 'https://api.bitbucket.org/2.0/teams/team_name/search/code'\
             '?search_query=foo&fields=%2Bvalues.file.commit.repository'
        {
          \"size\": 1,
          \"page\": 1,
          \"pagelen\": 10,
          \"query_substituted\": false,
          \"values\": [
            {
              \"type\": \"code_search_result\",
              \"content_match_count\": 1,
              \"content_matches\": [...],
              \"path_matches\": [...],
              \"file\": {
                \"commit\": {
                  \"type\": \"commit\",
                  \"hash\": \"ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\",
                  \"links\": {
                    \"self\": {
                      \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/commit/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"
                    },
                    \"html\": {
                      \"href\": \"https://bitbucket.org/my-workspace/demo/commits/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b\"
                    }
                  },
                  \"repository\": {
                    \"name\": \"demo\",
                    \"type\": \"repository\",
                    \"full_name\": \"my-workspace/demo\",
                    \"links\": {
                      \"self\": {
                        \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo\"
                      },
                      \"html\": {
                        \"href\": \"https://bitbucket.org/my-workspace/demo\"
                      },
                      \"avatar\": {
                        \"href\": \"https://bytebucket.org/ravatar/%7B850e1749-781a-4115-9316-df39d0600e7a%7D?ts=default\"
                      }
                    },
                    \"uuid\": \"{850e1749-781a-4115-9316-df39d0600e7a}\"
                  }
                },
                \"type\": \"commit_file\",
                \"links\": {
                  \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/my-workspace/demo/src/ad6964b5fe2880dbd9ddcad1c89000f1dbcbc24b/src/foo.py\"
                  }
                },
                \"path\": \"src/foo.py\"
              }
            }
          ]
        }
        ```
        
        Try `fields=%2Bvalues.*.*.*.*` to get an idea what's possible.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/teams/{username}/search/code", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResultPage])
                res.search_result_page = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    