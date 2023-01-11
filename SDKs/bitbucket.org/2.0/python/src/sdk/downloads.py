import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Downloads:
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

    
    def delete_repositories_workspace_repo_slug_downloads_filename_(self, request: operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest) -> operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse:
        r"""Deletes the specified download artifact from the repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_downloads(self, request: operations.GetRepositoriesWorkspaceRepoSlugDownloadsRequest) -> operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse:
        r"""Returns a list of download links associated with the repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/downloads", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugDownloadsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def get_repositories_workspace_repo_slug_downloads_filename_(self, request: operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest) -> operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse:
        r"""Return a redirect to the contents of a download artifact.
        
        This endpoint returns the actual file contents and not the artifact's
        metadata.
        
            $ curl -s -L https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads/hello.txt
            Hello World
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/downloads/{filename}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    
    def post_repositories_workspace_repo_slug_downloads(self, request: operations.PostRepositoriesWorkspaceRepoSlugDownloadsRequest) -> operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse:
        r"""Upload new download artifacts.
        
        To upload files, perform a `multipart/form-data` POST containing one
        or more `files` fields:
        
            $ echo Hello World > hello.txt
            $ curl -s -u evzijst -X POST https://api.bitbucket.org/2.0/repositories/evzijst/git-tests/downloads -F files=@hello.txt
        
        When a file is uploaded with the same name as an existing artifact,
        then the existing file will be replaced.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repositories/{workspace}/{repo_slug}/downloads", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRepositoriesWorkspaceRepoSlugDownloadsResponse(status_code=r.status_code, content_type=content_type)
        
        if True:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.error = out

        return res

    