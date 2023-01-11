import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SSHKeys:
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

    
    def add_ssh_key(self, request: operations.AddSSHKeyRequest) -> operations.AddSSHKeyResponse:
        r"""Create a new SSH Key
        Create a new SSH Key for a user. Provide the Public Key as formatted from the ssh-keygen command (openssh format or RFC-4716 format).
        
        If you'd prefer to let us generate your key automatically, you can log in to your account via the web portal and set up new keys via the SSH Keys page. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ssh-keys"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKeyResponse])
                res.ssh_key_response = out

        return res

    
    def delete_ssh_key(self, request: operations.DeleteSSHKeyRequest) -> operations.DeleteSSHKeyResponse:
        r"""Delete an SSH Key
        Delete the specified SSH key. This will not delete or deactivate the user tied to the key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ssh-keys/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ssh_key(self, request: operations.GetSSHKeyRequest) -> operations.GetSSHKeyResponse:
        r"""Get metadata for an SSH Key
        Return the information for a single SSH Key
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/ssh-keys/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKeyResponse])
                res.ssh_key_response = out

        return res

    
    def get_ssh_keys_list(self, request: operations.GetSSHKeysListRequest) -> operations.GetSSHKeysListResponse:
        r"""Get metadata for a list of SSH Keys
        Returns a list of SSH Keys within the account. Can be filtered for a single user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ssh-keys"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSSHKeysListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SSHKeyCollectionResponse])
                res.ssh_key_collection_response = out

        return res

    