import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Pullrequests:
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

    
    def delete_repositories_workspace_repo_slug_default_reviewers_target_username_(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse:
        r"""Removes a default reviewer from the repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repositories_workspace_repo_slug_pullrequests_pull_request_id_approve(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse:
        r"""Redact the authenticated user's approval of the specified pull
        request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repositories_workspace_repo_slug_pullrequests_pull_request_id_comments_comment_id_(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse:
        r"""Deletes a specific pull request comment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def delete_repositories_workspace_repo_slug_pullrequests_pull_request_id_request_changes(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_pullrequests_for_commit(self, request: operations.GetPullrequestsForCommitRequest) -> operations.GetPullrequestsForCommitResponse:
        r"""Returns a paginated list of all pull requests as part of which this commit was reviewed. Pull Request Commit Links app must be installed first before using this API; installation automatically occurs when 'Go to pull request' is clicked from the web interface for a commit's details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/pullrequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPullrequestsForCommitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPullrequests])
                res.paginated_pullrequests = out
        elif r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPullrequests])
                res.paginated_pullrequests = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_pullrequests_selected_user_(self, request: operations.GetPullrequestsSelectedUserRequest) -> operations.GetPullrequestsSelectedUserResponse:
        r"""Returns all pull requests authored by the specified user.
        
        By default only open pull requests are returned. This can be controlled
        using the `state` query parameter. To retrieve pull requests that are
        in one of multiple states, repeat the `state` parameter for each
        individual state.
        
        This endpoint also supports filtering and sorting of the results. See
        [filtering and sorting](../../../../meta/filtering) for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/pullrequests/{selected_user}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPullrequestsSelectedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPullrequests])
                res.paginated_pullrequests = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_default_reviewers(self, request: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersRequest) -> operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse:
        r"""Returns the repository's default reviewers.
        
        These are the users that are automatically added as reviewers on every
        new pull request that is created.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/default-reviewers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_default_reviewers_target_username_(self, request: operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) -> operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse:
        r"""Returns the specified reviewer.
        
        This can be used to test whether a user is among the repository's
        default reviewers list. A 404 indicates that that specified user is not
        a default reviewer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse:
        r"""Returns all pull requests on the specified repository.
        
        By default only open pull requests are returned. This can be controlled
        using the `state` query parameter. To retrieve pull requests that are
        in one of multiple states, repeat the `state` parameter for each
        individual state.
        
        This endpoint also supports filtering and sorting of the results. See
        [filtering and sorting](../../../../meta/filtering) for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPullrequests])
                res.paginated_pullrequests = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_activity(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse:
        r"""Returns a paginated list of the pull request's activity log.
        
        This handler serves both a v20 and internal endpoint. The v20 endpoint
        returns reviewer comments, updates, approvals and request changes. The internal
        endpoint includes those plus tasks and attachments.
        
        Comments created on a file or a line of code have an inline property.
        
        Comment example:
        ```
        {
            \"pagelen\": 20,
            \"values\": [
                {
                    \"comment\": {
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088\"
                            }
                        },
                        \"deleted\": false,
                        \"pullrequest\": {
                            \"type\": \"pullrequest\",
                            \"id\": 5695,
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                                }
                            },
                            \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                        },
                        \"content\": {
                            \"raw\": \"inline with to a dn from lines\",
                            \"markup\": \"markdown\",
                            \"html\": \"<p>inline with to a dn from lines</p>\",
                            \"type\": \"rendered\"
                        },
                        \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",
                        \"user\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        },
                        \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",
                        \"user\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        },
                        \"updated_on\": \"2019-09-27T00:33:46.055384+00:00\",
                        \"inline\": {
                            \"context_lines\": \"\",
                            \"to\": null,
                            \"path\": \"\",
                            \"outdated\": false,
                            \"from\": 211
                        },
                        \"type\": \"pullrequest_comment\",
                        \"id\": 118571088
                    },
                    \"pull_request\": {
                        \"type\": \"pullrequest\",
                        \"id\": 5695,
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                            }
                        },
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                    }
                }
            ]
        }
        ```
        
        Updates include a state property of OPEN, MERGED, or DECLINED.
        
        Update example:
        ```
        {
            \"pagelen\": 20,
            \"values\": [
                {
                    \"update\": {
                        \"description\": \"\",
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\",
                        \"destination\": {
                            \"commit\": {
                                \"type\": \"commit\",
                                \"hash\": \"6a2c16e4a152\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152\"
                                    }
                                }
                            },
                            \"branch\": {
                                \"name\": \"master\"
                            },
                            \"repository\": {
                                \"name\": \"Atlaskit-MK-2\",
                                \"type\": \"repository\",
                                \"full_name\": \"atlassian/atlaskit-mk-2\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"
                                    },
                                    \"avatar\": {
                                        \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"
                                    }
                                },
                                \"uuid\": \"{}\"
                            }
                        },
                        \"reason\": \"\",
                        \"source\": {
                            \"commit\": {
                                \"type\": \"commit\",
                                \"hash\": \"728c8bad1813\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813\"
                                    }
                                }
                            },
                            \"branch\": {
                                \"name\": \"username/NONE-add-onClick-prop-for-accessibility\"
                            },
                            \"repository\": {
                                \"name\": \"Atlaskit-MK-2\",
                                \"type\": \"repository\",
                                \"full_name\": \"atlassian/atlaskit-mk-2\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"
                                    },
                                    \"avatar\": {
                                        \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"
                                    }
                                },
                                \"uuid\": \"{}\"
                            }
                        },
                        \"state\": \"OPEN\",
                        \"author\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        },
                        \"date\": \"2019-05-10T06:48:25.305565+00:00\"
                    },
                    \"pull_request\": {
                        \"type\": \"pullrequest\",
                        \"id\": 5695,
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                            }
                        },
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                    }
                }
            ]
        }
        ```
        
        Approval example:
        ```
        {
            \"pagelen\": 20,
            \"values\": [
                {
                    \"approval\": {
                        \"date\": \"2019-09-27T00:37:19.849534+00:00\",
                        \"pullrequest\": {
                            \"type\": \"pullrequest\",
                            \"id\": 5695,
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                                }
                            },
                            \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                        },
                        \"user\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        }
                    },
                    \"pull_request\": {
                        \"type\": \"pullrequest\",
                        \"id\": 5695,
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                            }
                        },
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                    }
                }
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/activity", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse:
        r"""Returns the specified pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_activity(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityResponse:
        r"""Returns a paginated list of the pull request's activity log.
        
        This handler serves both a v20 and internal endpoint. The v20 endpoint
        returns reviewer comments, updates, approvals and request changes. The internal
        endpoint includes those plus tasks and attachments.
        
        Comments created on a file or a line of code have an inline property.
        
        Comment example:
        ```
        {
            \"pagelen\": 20,
            \"values\": [
                {
                    \"comment\": {
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695/comments/118571088\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695/_/diff#comment-118571088\"
                            }
                        },
                        \"deleted\": false,
                        \"pullrequest\": {
                            \"type\": \"pullrequest\",
                            \"id\": 5695,
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                                }
                            },
                            \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                        },
                        \"content\": {
                            \"raw\": \"inline with to a dn from lines\",
                            \"markup\": \"markdown\",
                            \"html\": \"<p>inline with to a dn from lines</p>\",
                            \"type\": \"rendered\"
                        },
                        \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",
                        \"user\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        },
                        \"created_on\": \"2019-09-27T00:33:46.039178+00:00\",
                        \"user\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        },
                        \"updated_on\": \"2019-09-27T00:33:46.055384+00:00\",
                        \"inline\": {
                            \"context_lines\": \"\",
                            \"to\": null,
                            \"path\": \"\",
                            \"outdated\": false,
                            \"from\": 211
                        },
                        \"type\": \"pullrequest_comment\",
                        \"id\": 118571088
                    },
                    \"pull_request\": {
                        \"type\": \"pullrequest\",
                        \"id\": 5695,
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                            }
                        },
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                    }
                }
            ]
        }
        ```
        
        Updates include a state property of OPEN, MERGED, or DECLINED.
        
        Update example:
        ```
        {
            \"pagelen\": 20,
            \"values\": [
                {
                    \"update\": {
                        \"description\": \"\",
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\",
                        \"destination\": {
                            \"commit\": {
                                \"type\": \"commit\",
                                \"hash\": \"6a2c16e4a152\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/6a2c16e4a152\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/6a2c16e4a152\"
                                    }
                                }
                            },
                            \"branch\": {
                                \"name\": \"master\"
                            },
                            \"repository\": {
                                \"name\": \"Atlaskit-MK-2\",
                                \"type\": \"repository\",
                                \"full_name\": \"atlassian/atlaskit-mk-2\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"
                                    },
                                    \"avatar\": {
                                        \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"
                                    }
                                },
                                \"uuid\": \"{}\"
                            }
                        },
                        \"reason\": \"\",
                        \"source\": {
                            \"commit\": {
                                \"type\": \"commit\",
                                \"hash\": \"728c8bad1813\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/commit/728c8bad1813\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/commits/728c8bad1813\"
                                    }
                                }
                            },
                            \"branch\": {
                                \"name\": \"username/NONE-add-onClick-prop-for-accessibility\"
                            },
                            \"repository\": {
                                \"name\": \"Atlaskit-MK-2\",
                                \"type\": \"repository\",
                                \"full_name\": \"atlassian/atlaskit-mk-2\",
                                \"links\": {
                                    \"self\": {
                                        \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2\"
                                    },
                                    \"html\": {
                                        \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2\"
                                    },
                                    \"avatar\": {
                                        \"href\": \"https://bytebucket.org/ravatar/%7B%7D?ts=js\"
                                    }
                                },
                                \"uuid\": \"{}\"
                            }
                        },
                        \"state\": \"OPEN\",
                        \"author\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        },
                        \"date\": \"2019-05-10T06:48:25.305565+00:00\"
                    },
                    \"pull_request\": {
                        \"type\": \"pullrequest\",
                        \"id\": 5695,
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                            }
                        },
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                    }
                }
            ]
        }
        ```
        
        Approval example:
        ```
        {
            \"pagelen\": 20,
            \"values\": [
                {
                    \"approval\": {
                        \"date\": \"2019-09-27T00:37:19.849534+00:00\",
                        \"pullrequest\": {
                            \"type\": \"pullrequest\",
                            \"id\": 5695,
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                                }
                            },
                            \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                        },
                        \"user\": {
                            \"display_name\": \"Name Lastname\",
                            \"uuid\": \"{}\",
                            \"links\": {
                                \"self\": {
                                    \"href\": \"https://bitbucket.org/!api/2.0/users/%7B%7D\"
                                },
                                \"html\": {
                                    \"href\": \"https://bitbucket.org/%7B%7D/\"
                                },
                                \"avatar\": {
                                    \"href\": \"https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/:/128\"
                                }
                            },
                            \"type\": \"user\",
                            \"nickname\": \"Name\",
                            \"account_id\": \"\"
                        }
                    },
                    \"pull_request\": {
                        \"type\": \"pullrequest\",
                        \"id\": 5695,
                        \"links\": {
                            \"self\": {
                                \"href\": \"https://bitbucket.org/!api/2.0/repositories/atlassian/atlaskit-mk-2/pullrequests/5695\"
                            },
                            \"html\": {
                                \"href\": \"https://bitbucket.org/atlassian/atlaskit-mk-2/pull-requests/5695\"
                            }
                        },
                        \"title\": \"username/NONE: small change from onFocus to onClick to handle tabbing through the page and not expand the editor unless a click event triggers it\"
                    }
                }
            ]
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/activity", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDActivityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_comments(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse:
        r"""Returns a paginated list of the pull request's comments.
        
        This includes both global, inline comments and replies.
        
        The default sorting is oldest to newest and can be overridden with
        the `sort` query parameter.
        
        This endpoint also supports filtering and sorting of the results. See
        [filtering and sorting](../../../../../../meta/filtering) for more
        details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedPullrequestComments])
                res.paginated_pullrequest_comments = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_comments_comment_id_(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse:
        r"""Returns a specific pull request comment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_commits(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsResponse:
        r"""Returns a paginated list of the pull request's commits.
        
        These are the commits that are being merged into the destination
        branch when the pull requests gets accepted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/commits", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommitsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_diff(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse:
        r"""Redirects to the [repository diff](../../diff/%7Bspec%7D)
        with the revspec that corresponds to the pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diff", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_diffstat(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatResponse:
        r"""Redirects to the [repository diffstat](../../diffstat/%7Bspec%7D)
        with the revspec that corresponds to the pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/diffstat", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDiffstatResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_merge_task_status_task_id_(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse:
        r"""When merging a pull request takes too long, the client receives a
        task ID along with a 202 status code. The task ID can be used in a call
        to this endpoint to check the status of a merge task.
        
        ```
        curl -X GET https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>
        ```
        
        If the merge task is not yet finished, a PENDING status will be returned.
        
        ```
        HTTP/2 200
        {
            \"task_status\": \"PENDING\",
            \"links\": {
                \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>\"
                }
            }
        }
        ```
        
        If the merge was successful, a SUCCESS status will be returned.
        
        ```
        HTTP/2 200
        {
            \"task_status\": \"SUCCESS\",
            \"links\": {
                \"self\": {
                    \"href\": \"https://api.bitbucket.org/2.0/repositories/atlassian/bitbucket/pullrequests/2286/merge/task-status/<task_id>\"
                }
            },
            \"merge_result\": <the merged pull request object>
        }
        ```
        
        If the merge task failed, an error will be returned.
        
        ```
        {
            \"type\": \"error\",
            \"error\": {
                \"message\": \"<error message>\"
            }
        }
        ```
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge/task-status/{task_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeTaskStatusTaskIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_patch(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchResponse:
        r"""Redirects to the [repository patch](../../patch/%7Bspec%7D)
        with the revspec that corresponds to pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/patch", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_repositories_workspace_repo_slug_pullrequests_pull_request_id_statuses(self, request: operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesRequest) -> operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse:
        r"""Returns all statuses (e.g. build results) for the given pull
        request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDStatusesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedCommitstatuses])
                res.paginated_commitstatuses = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_pullrequests(self, request: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsRequest) -> operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse:
        r"""Creates a new pull request where the destination repository is
        this repository and the author is the authenticated user.
        
        The minimum required fields to create a pull request are `title` and
        `source`, specified by a branch name.
        
        ```
        curl https://api.bitbucket.org/2.0/repositories/my-username/my-repository/pullrequests \
            -u my-username:my-password \
            --request POST \
            --header 'Content-Type: application/json' \
            --data '{
                \"title\": \"My Title\",
                \"source\": {
                    \"branch\": {
                        \"name\": \"staging\"
                    }
                }
            }'
        ```
        
        If the pull request's `destination` is not specified, it will default
        to the `repository.mainbranch`. To open a pull request to a
        different branch, say from a feature branch to a staging branch,
        specify a `destination` (same format as the `source`):
        
        ```
        {
            \"title\": \"My Title\",
            \"source\": {
                \"branch\": {
                    \"name\": \"my-feature-branch\"
                }
            },
            \"destination\": {
                \"branch\": {
                    \"name\": \"staging\"
                }
            }
        }
        ```
        
        Reviewers can be specified by adding an array of user objects as the
        `reviewers` property.
        
        ```
        {
            \"title\": \"My Title\",
            \"source\": {
                \"branch\": {
                    \"name\": \"my-feature-branch\"
                }
            },
            \"reviewers\": [
                {
                    \"uuid\": \"{504c3b62-8120-4f0c-a7bc-87800b9d6f70}\"
                }
            ]
        }
        ```
        
        Other fields:
        
        * `description` - a string
        * `close_source_branch` - boolean that specifies if the source branch should be closed upon merging
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugPullrequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_pullrequests_pull_request_id_approve(self, request: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveRequest) -> operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse:
        r"""Approve the specified pull request as the authenticated user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/approve", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.participant = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_pullrequests_pull_request_id_comments(self, request: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsRequest) -> operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse:
        r"""Creates a new pull request comment.
        
        Returns the newly created pull request comment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_pullrequests_pull_request_id_decline(self, request: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineRequest) -> operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineResponse:
        r"""Declines the pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/decline", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDDeclineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest = out
        elif r.status_code == 555:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_pullrequests_pull_request_id_merge(self, request: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeRequest) -> operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse:
        r"""Merges the pull request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/merge", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDMergeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 555:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_pullrequests_pull_request_id_request_changes(self, request: operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesRequest) -> operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/request-changes", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequestChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.participant = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_repositories_workspace_repo_slug_default_reviewers_target_username_(self, request: operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRequest) -> operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse:
        r"""Adds the specified user to the repository's list of default
        reviewers.
        
        This method is idempotent. Adding a user a second time has no effect.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/default-reviewers/{target_username}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_repositories_workspace_repo_slug_pullrequests_pull_request_id_(self, request: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDRequest) -> operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse:
        r"""Mutates the specified pull request.
        
        This can be used to change the pull request's branches or description.
        
        Only open pull requests can be mutated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_repositories_workspace_repo_slug_pullrequests_pull_request_id_comments_comment_id_(self, request: operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDRequest) -> operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse:
        r"""Updates a specific pull request comment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/pullrequests/{pull_request_id}/comments/{comment_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIDCommentsCommentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.pullrequest_comment = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    