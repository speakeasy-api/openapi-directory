import requests
from typing import Any,Optional
from sdk.models import shared, operations
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

    
    def get_vehicle_chargestate(self, request: operations.GetVehicleChargestateRequest) -> operations.GetVehicleChargestateResponse:
        r"""Get Vehicle Charge State
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/charge-state", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehicleChargestateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVehicleChargestate200ApplicationJSON])
                res.get_vehicle_chargestate_200_application_json_object = out

        return res

    
    def get_vehicles(self, request: operations.GetVehiclesRequest) -> operations.GetVehiclesResponse:
        r"""List Vehicles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vehicles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Onevehicles1Percent7BvehicleIDPercent7DGetResponses200ContentApplication1jsonSchema]])
                res.onevehicles_1_percent_7_bvehicle_id_percent_7_d_get_responses_200_content_application_1json_schemas = out

        return res

    
    def get_vehicles_vehicleid(self, request: operations.GetVehiclesVehicleidRequest) -> operations.GetVehiclesVehicleidResponse:
        r"""Get Vehicle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesVehicleidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVehiclesVehicleid200ApplicationJSON])
                res.get_vehicles_vehicleid_200_application_json_object = out

        return res

    
    def get_vehicles_vehicleid_information(self, request: operations.GetVehiclesVehicleidInformationRequest) -> operations.GetVehiclesVehicleidInformationResponse:
        r"""Get Vehicle Information
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/information", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesVehicleidInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVehiclesVehicleidInformation200ApplicationJSON])
                res.get_vehicles_vehicleid_information_200_application_json_object = out

        return res

    
    def get_vehicles_vehicleid_location(self, request: operations.GetVehiclesVehicleidLocationRequest) -> operations.GetVehiclesVehicleidLocationResponse:
        r"""Get Vehicle Location
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/location", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesVehicleidLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVehiclesVehicleidLocation200ApplicationJSON])
                res.get_vehicles_vehicleid_location_200_application_json_object = out

        return res

    
    def get_vehicles_vehicleid_odometer(self, request: operations.GetVehiclesVehicleidOdometerRequest) -> operations.GetVehiclesVehicleidOdometerResponse:
        r"""Get Vehicle Odometer
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/odometer", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesVehicleidOdometerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetVehiclesVehicleidOdometer200ApplicationJSON])
                res.get_vehicles_vehicleid_odometer_200_application_json_object = out

        return res

    
    def get_vehicles_vehicleid_smartchargingpolicy(self, request: operations.GetVehiclesVehicleidSmartchargingpolicyRequest) -> operations.GetVehiclesVehicleidSmartchargingpolicyResponse:
        r"""Get Vehicle Smart Charging Policy
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/smart-charging-policy", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVehiclesVehicleidSmartchargingpolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema])
                res.onevehicles_1_percent_7_bvehicle_id_percent_7_d_1smart_charging_policy_put_request_body_content_application_1json_schema = out

        return res

    
    def post_vehicles_vehicleid_charging(self, request: operations.PostVehiclesVehicleidChargingRequest) -> operations.PostVehiclesVehicleidChargingResponse:
        r"""Start / Stop Charging
        Instruct the vehicle to start or stop charging. 
        
        #### Precedence over smart charging
        If the vehicle is at a charging location where smart charging is activated:
        - a request to `start` charging will override smart charging and charging will stay on until fully charged. 
        - a request to `stop` charging will override smart charging and charging will be kept off for the duration of the current smart charging cycle.
        
        The smart charging settings are not altered by these actions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/charging", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVehiclesVehicleidChargingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def post_vehicles_vehicleid_watch(self, request: operations.PostVehiclesVehicleidWatchRequest) -> operations.PostVehiclesVehicleidWatchResponse:
        r"""Start Watching Vehicle
        Temporarily triggers high-rate updates of the vehicle's properties, and this state expires automatically. This gives you a way to tell us that user may be interacting with your application and are expecting as-fast-as-possible updates on the status of their vehicle in your UI.
        
        Any data changes resulting from this high-rate updating are reflected everywhere, whether you pull data from the `Vehicles` endpoint, or recieve it via the [Firehose Webhook](#tag/Webhooks)
        
        The specifics of the expiration times, watch behaviors, and change thresholds are tuned by us to make sure that they work as expected, without causing undue interruption to the vehicle. For many vendors, it is not appropriate to let the high-rate monitoring last indefinitely, as it will keep systems within the car awake that should be allowed to fall into low-power/standby modes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/watch", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostVehiclesVehicleidWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onevehicles1Percent7BvehicleIDPercent7D1watchPostRequestBodyContentApplication1jsonSchema])
                res.onevehicles_1_percent_7_bvehicle_id_percent_7_d_1watch_post_request_body_content_application_1json_schema = out

        return res

    
    def put_vehicles_vehicleid_smartchargingpolicy(self, request: operations.PutVehiclesVehicleidSmartchargingpolicyRequest) -> operations.PutVehiclesVehicleidSmartchargingpolicyResponse:
        r"""Update Vehicle Smart Charging Policy
        Updates the Smart Charging settings for a vehicle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/vehicles/{vehicleId}/smart-charging-policy", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVehiclesVehicleidSmartchargingpolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Onevehicles1Percent7BvehicleIDPercent7D1smartChargingPolicyPutRequestBodyContentApplication1jsonSchema])
                res.onevehicles_1_percent_7_bvehicle_id_percent_7_d_1smart_charging_policy_put_request_body_content_application_1json_schema = out

        return res

    