import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PermissionGroups:
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

    
    def create_permission_group(self, request: operations.CreatePermissionGroupRequest) -> operations.CreatePermissionGroupResponse:
        r"""Create Permission Group
        This endpoint creates a new Permission Group in a specified Product 
        identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/permissions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreatePermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def delete_permission_group(self, request: operations.DeletePermissionGroupRequest) -> operations.DeletePermissionGroupResponse:
        r"""Delete Permission Group
        This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/permissions/{permissionGroupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_permission_group(self, request: operations.GetPermissionGroupRequest) -> operations.GetPermissionGroupResponse:
        r"""Get Permission Group
        This endpoint returns the metadata of a Permission Group 
        identified by the `permissionGroupId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/permissions/{permissionGroupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_permission_groups(self, request: operations.GetPermissionGroupsRequest) -> operations.GetPermissionGroupsResponse:
        r"""List Permission Groups
        This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
        `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/permissions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPermissionGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PermissionGroupModel]])
                res.permission_group_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PermissionGroupModel]])
                res.permission_group_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def update_permission_group(self, request: operations.UpdatePermissionGroupRequest) -> operations.UpdatePermissionGroupResponse:
        r"""Update Permission Group
        This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/permissions/{permissionGroupId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePermissionGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PermissionGroupModel])
                res.permission_group_model = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    