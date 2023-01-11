import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Members:
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

    
    def delete_organization_member(self, request: operations.DeleteOrganizationMemberRequest) -> operations.DeleteOrganizationMemberResponse:
        r"""Delete Member from Organization
        This endpoint removes a Member identified by the `userId` from the 
        given Organization identified by the `organizationId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{organizationId}/members/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrganizationMemberResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def delete_product_member(self, request: operations.DeleteProductMemberRequest) -> operations.DeleteProductMemberResponse:
        r"""Delete Member from Product
        This endpoint removes a Member identified by the `userId` from the 
        given Product identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/members/{userId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProductMemberResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_organization_members(self, request: operations.GetOrganizationMembersRequest) -> operations.GetOrganizationMembersResponse:
        r"""List Organization Members
        This endpoint returns the list of Members that belongs 
        to the given Organization, identified by the `organizationId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/organizations/{organizationId}/members", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrganizationMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.UserModel]])
                res.user_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.UserModel]])
                res.user_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def get_product_members(self, request: operations.GetProductMembersRequest) -> operations.GetProductMembersResponse:
        r"""List Product Members
        This endpoint returns the list of Members that belongs 
        to the given Product, identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/members", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/hal+json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.MemberModel]])
                res.member_models = out
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.MemberModel]])
                res.member_models = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def invite_member(self, request: operations.InviteMemberRequest) -> operations.InviteMemberResponse:
        r"""Invite Member
        This endpoint invites a Member into the given Product identified by the `productId` parameter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/products/{productId}/members/invite", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InviteMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
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

    