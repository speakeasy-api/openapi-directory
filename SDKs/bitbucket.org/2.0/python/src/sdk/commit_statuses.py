import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class CommitStatuses:
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

    
    def get_repositories_workspace_repo_slug_commit_commit_statuses(self, request: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesRequest) -> operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse:
        r"""Returns all statuses (e.g. build results) for a specific commit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_repositories_workspace_repo_slug_commit_commit_statuses_build_key_(self, request: operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest) -> operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse:
        r"""Returns the specified build status for a commit.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.commitstatus = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

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

    
    def post_repositories_workspace_repo_slug_commit_commit_statuses_build(self, request: operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildRequest) -> operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse:
        r"""Creates a new build status against the specified commit.
        
        If the specified key already exists, the existing status object will
        be overwritten.
        
        Example:
        
        ```
        curl https://api.bitbucket.org/2.0/repositories/my-workspace/my-repo/commit/e10dae226959c2194f2b07b077c07762d93821cf/statuses/build/           -X POST -u jdoe -H 'Content-Type: application/json'           -d '{
            \"key\": \"MY-BUILD\",
            \"state\": \"SUCCESSFUL\",
            \"description\": \"42 tests passed\",
            \"url\": \"https://www.example.org/my-build-result\"
          }'
        ```
        
        When creating a new commit status, you can use a URI template for the URL.
        Templates are URLs that contain variable names that Bitbucket will
        evaluate at runtime whenever the URL is displayed anywhere similar to
        parameter substitution in
        [Bitbucket Connect](https://developer.atlassian.com/bitbucket/concepts/context-parameters.html).
        For example, one could use `https://foo.com/builds/{repository.full_name}`
        which Bitbucket will turn into `https://foo.com/builds/foo/bar` at render time.
        The context variables available are `repository` and `commit`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.commitstatus = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def put_repositories_workspace_repo_slug_commit_commit_statuses_build_key_(self, request: operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest) -> operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse:
        r"""Used to update the current status of a build status object on the
        specific commit.
        
        This operation can also be used to change other properties of the
        build status:
        
        * `state`
        * `name`
        * `description`
        * `url`
        * `refname`
        
        The `key` cannot be changed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/commit/{commit}/statuses/build/{key}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.commitstatus = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    