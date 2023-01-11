import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Vehicles:
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

    
    def get_vehicle(self, request: operations.GetVehicleRequest) -> operations.GetVehicleResponse:
        r"""Get a vehicle's data
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_battery(self, request: operations.GetVehicleBatteryRequest) -> operations.GetVehicleBatteryResponse:
        r"""Get a vehicle's battery
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/battery", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleBatteryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_charge(self, request: operations.GetVehicleChargeRequest) -> operations.GetVehicleChargeResponse:
        r"""Get a vehicle's charge
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/charge", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_location(self, request: operations.GetVehicleLocationRequest) -> operations.GetVehicleLocationResponse:
        r"""Get a vehicle's location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/location", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicle_odometer(self, request: operations.GetVehicleOdometerRequest) -> operations.GetVehicleOdometerResponse:
        r"""Get a vehicle's odometer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/odometer", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleOdometerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_vehicles(self, request: operations.GetVehiclesRequest) -> operations.GetVehiclesResponse:
        r"""List all vehicles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/vehicles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVehicles200ApplicationJSON])
                res.get_vehicles_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def post_charge(self, request: operations.PostChargeRequest) -> operations.PostChargeResponse:
        r"""Change charge
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/vehicles/{id}/charge", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostChargeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCharge200ApplicationJSON])
                res.post_charge_200_application_json_object = out
        elif r.status_code == 400:
            pass

        return res

    