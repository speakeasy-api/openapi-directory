import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Workspace:
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

    
    def create_workspace(self, request: operations.CreateWorkspaceRequest) -> operations.CreateWorkspaceResponse:
        r"""Creates a workspace
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/workspaces/create"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkspaceRead])
                res.workspace_read = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidInputExceptionInfo])
                res.invalid_input_exception_info = out

        return res

    
    def delete_workspace(self, request: operations.DeleteWorkspaceRequest) -> operations.DeleteWorkspaceResponse:
        r"""Deletes a workspace
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/workspaces/delete"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundKnownExceptionInfo])
                res.not_found_known_exception_info = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidInputExceptionInfo])
                res.invalid_input_exception_info = out

        return res

    
    def get_workspace(self, request: operations.GetWorkspaceRequest) -> operations.GetWorkspaceResponse:
        r"""Find workspace by ID
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/workspaces/get"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkspaceRead])
                res.workspace_read = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundKnownExceptionInfo])
                res.not_found_known_exception_info = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidInputExceptionInfo])
                res.invalid_input_exception_info = out

        return res

    
    def get_workspace_by_slug(self, request: operations.GetWorkspaceBySlugRequest) -> operations.GetWorkspaceBySlugResponse:
        r"""Find workspace by slug
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/workspaces/get_by_slug"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetWorkspaceBySlugResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkspaceRead])
                res.workspace_read = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundKnownExceptionInfo])
                res.not_found_known_exception_info = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidInputExceptionInfo])
                res.invalid_input_exception_info = out

        return res

    
    def list_workspaces(self) -> operations.ListWorkspacesResponse:
        r"""List all workspaces registered in the current Airbyte deployment
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/workspaces/list"
        
        
        client = self._security_client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWorkspacesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkspaceReadList])
                res.workspace_read_list = out

        return res

    
    def update_workspace(self, request: operations.UpdateWorkspaceRequest) -> operations.UpdateWorkspaceResponse:
        r"""Update workspace state
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/workspaces/update"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateWorkspaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WorkspaceRead])
                res.workspace_read = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NotFoundKnownExceptionInfo])
                res.not_found_known_exception_info = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InvalidInputExceptionInfo])
                res.invalid_input_exception_info = out

        return res

    