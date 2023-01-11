import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ChargeStations:
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

    
    def delete_charge_station(self, request: operations.DeleteChargeStationRequest) -> operations.DeleteChargeStationResponse:
        r"""Use to delete a charge station
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChargeStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_charge_station(self, request: operations.GetChargeStationRequest) -> operations.GetChargeStationResponse:
        r"""Get a single charge station's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_charge_station_connectors(self, request: operations.GetChargeStationConnectorsRequest) -> operations.GetChargeStationConnectorsResponse:
        r"""List connectors for a chargestation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}/connectors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeStationConnectorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_charge_stations(self, request: operations.GetChargeStationsRequest) -> operations.GetChargeStationsResponse:
        r"""List all Chargestations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/chargestations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeStationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_charge_station(self, request: operations.PatchChargeStationRequest) -> operations.PatchChargeStationResponse:
        r"""Update a charge station's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/chargestations/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchChargeStationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PatchChargeStation200ApplicationJSON])
                res.patch_charge_station_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_charge_stations(self, request: operations.PostChargeStationsRequest) -> operations.PostChargeStationsResponse:
        r"""Create a new charge station
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/chargestations"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChargeStationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostChargeStations201ApplicationJSON])
                res.post_charge_stations_201_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    