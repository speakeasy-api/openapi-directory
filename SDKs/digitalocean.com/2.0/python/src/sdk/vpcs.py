import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VpCs:
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

    
    def create_vpc(self, request: operations.CreateVpcRequest) -> operations.CreateVpcResponse:
        r"""Create a New VPC
        To create a VPC, send a POST request to `/v2/vpcs` specifying the attributes
        in the table below in the JSON body.
        
        **Note:** If you do not currently have a VPC network in a specific datacenter
        region, the first one that you create will be set as the default for that
        region. The default VPC for a region cannot be changed or deleted.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vpcs"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVpcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateVpc201ApplicationJSON])
                res.create_vpc_201_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateVpc401ApplicationJSON])
                res.create_vpc_401_application_json_object = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def delete_vpc(self, request: operations.DeleteVpcRequest) -> operations.DeleteVpcResponse:
        r"""Delete a VPC
        To delete a VPC, send a DELETE request to `/v2/vpcs/$VPC_ID`. A 204 status
        code with no body will be returned in response to a successful request.
        
        The default VPC for a region can not be deleted. Additionally, a VPC can only
        be deleted if it does not contain any member resources. Attempting to delete
        a region's default VPC or a VPC that still has members will result in a
        403 Forbidden error response.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vpcs/{vpc_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVpcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteVpc401ApplicationJSON])
                res.delete_vpc_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def get_vpc(self, request: operations.GetVpcRequest) -> operations.GetVpcResponse:
        r"""Retrieve an Existing VPC
        To show information about an existing VPC, send a GET request to `/v2/vpcs/$VPC_ID`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vpcs/{vpc_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVpcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVpc200ApplicationJSON])
                res.get_vpc_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVpc401ApplicationJSON])
                res.get_vpc_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def list_vpc_members(self, request: operations.ListVpcMembersRequest) -> operations.ListVpcMembersResponse:
        r"""List the Member Resources of a VPC
        To list all of the resources that are members of a VPC, send a GET request to
        `/v2/vpcs/$VPC_ID/members`.
        
        To only list resources of a specific type that are members of the VPC,
        included a `resource_type` query parameter. For example, to only list Droplets
        in the VPC, send a GET request to `/v2/vpcs/$VPC_ID/members?resource_type=droplet`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vpcs/{vpc_id}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVpcMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVpcMembers200ApplicationJSON])
                res.list_vpc_members_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVpcMembers401ApplicationJSON])
                res.list_vpc_members_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def list_vpcs(self, request: operations.ListVpcsRequest) -> operations.ListVpcsResponse:
        r"""List All VPCs
        To list all of the VPCs on your account, send a GET request to `/v2/vpcs`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/vpcs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListVpcsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVpcs200ApplicationJSON])
                res.list_vpcs_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListVpcs401ApplicationJSON])
                res.list_vpcs_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def patch_vpc(self, request: operations.PatchVpcRequest) -> operations.PatchVpcResponse:
        r"""Partially Update a VPC
        To update a subset of information about a VPC, send a PATCH request to
        `/v2/vpcs/$VPC_ID`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vpcs/{vpc_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchVpcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchVpc200ApplicationJSON])
                res.patch_vpc_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchVpc401ApplicationJSON])
                res.patch_vpc_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    
    def update_vpc(self, request: operations.UpdateVpcRequest) -> operations.UpdateVpcResponse:
        r"""Update a VPC
        To update information about a VPC, send a PUT request to `/v2/vpcs/$VPC_ID`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/vpcs/{vpc_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateVpcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateVpc200ApplicationJSON])
                res.update_vpc_200_application_json_object = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateVpc401ApplicationJSON])
                res.update_vpc_401_application_json_object = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out
        else:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema])
                res.onev2_11_clicks_get_responses_401_content_application_1json_schema = out

        return res

    