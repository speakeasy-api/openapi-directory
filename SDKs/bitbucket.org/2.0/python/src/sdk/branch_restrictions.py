import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class BranchRestrictions:
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

    
    def delete_repositories_workspace_repo_slug_branch_restrictions_id_(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse:
        r"""Deletes an existing branch restriction rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_branch_restrictions(self, request: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse:
        r"""Returns a paginated list of all branch restrictions on the
        repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branch-restrictions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaginatedBranchrestrictions])
                res.paginated_branchrestrictions = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_branch_restrictions_id_(self, request: operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest) -> operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse:
        r"""Returns a specific branch restriction rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.branchrestriction = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_branch_restrictions(self, request: operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest) -> operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse:
        r"""Creates a new branch restriction rule for a repository.
        
        `kind` describes what will be restricted. Allowed values include:
        `push`, `force`, `delete` and `restrict_merges`.
        
        Different kinds of branch restrictions have different requirements:
        
        * `push` and `restrict_merges` require `users` and `groups` to be
          specified. Empty lists are allowed, in which case permission is
          denied for everybody.
        
        The restriction applies to all branches that match. There are
        two ways to match a branch. It is configured in `branch_match_kind`:
        
        1. `glob`: Matches a branch against the `pattern`. A `'*'` in
           `pattern` will expand to match zero or more characters, and every
           other character matches itself. For example, `'foo*'` will match
           `'foo'` and `'foobar'`, but not `'barfoo'`. `'*'` will match all
           branches.
        2. `branching_model`: Matches a branch against the repository's
           branching model. The `branch_type` controls the type of branch
           to match. Allowed values include: `production`, `development`,
           `bugfix`, `release`, `feature` and `hotfix`.
        
        The combination of `kind` and match must be unique. This means that
        two `glob` restrictions in a repository cannot have the same `kind` and
        `pattern`. Additionally, two `branching_model` restrictions in a
        repository cannot have the same `kind` and `branch_type`.
        
        `users` and `groups` are lists of users and groups that are except from
        the restriction. They can only be configured in `push` and
        `restrict_merges` restrictions. The `push` restriction stops a user
        pushing to matching branches unless that user is in `users` or is a
        member of a group in `groups`. The `restrict_merges` stops a user
        merging pull requests to matching branches unless that user is in
        `users` or is a member of a group in `groups`. Adding new users or
        groups to an existing restriction should be done via `PUT`.
        
        Note that branch restrictions with overlapping matchers is allowed,
        but the resulting behavior may be surprising.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branch-restrictions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.branchrestriction = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_repositories_workspace_repo_slug_branch_restrictions_id_(self, request: operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDRequest) -> operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse:
        r"""Updates an existing branch restriction rule.
        
        Fields not present in the request body are ignored.
        
        See [`POST`](../branch-restrictions#post) for details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/branch-restrictions/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.branchrestriction = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    