import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ChargingLocations:
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

    
    def delete_charginglocations_charginglocationid(self, request: operations.DeleteCharginglocationsCharginglocationidRequest) -> operations.DeleteCharginglocationsCharginglocationidResponse:
        r"""Delete Charging Location
        Delete a Charging Location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/charging-locations/{chargingLocationId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCharginglocationsCharginglocationidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_charginglocations(self, request: operations.GetCharginglocationsRequest) -> operations.GetCharginglocationsResponse:
        r"""List Charging Locations
        Returns a list of Charging Locations registered to the User
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charging-locations"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCharginglocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema]])
                res.onecharging_locations_post_request_body_content_application_1json_schemas = out

        return res

    
    def get_charginglocations_charginglocationid(self, request: operations.GetCharginglocationsCharginglocationidRequest) -> operations.GetCharginglocationsCharginglocationidResponse:
        r"""Get Charging Location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/charging-locations/{chargingLocationId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCharginglocationsCharginglocationidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema])
                res.onecharging_locations_post_request_body_content_application_1json_schema = out

        return res

    
    def post_charginglocations(self, request: operations.PostCharginglocationsRequest) -> operations.PostCharginglocationsResponse:
        r"""Create Charging Location
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charging-locations"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCharginglocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema])
                res.onecharging_locations_post_request_body_content_application_1json_schema = out

        return res

    
    def put_charginglocations_charginglocationid(self, request: operations.PutCharginglocationsCharginglocationidRequest) -> operations.PutCharginglocationsCharginglocationidResponse:
        r"""Update Charging Location
        Updates a charging location with new configuration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/charging-locations/{chargingLocationId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCharginglocationsCharginglocationidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema])
                res.onecharging_locations_post_request_body_content_application_1json_schema = out

        return res

    