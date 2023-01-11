import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ProPlanOrGreater:
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

    
    def days_supply_days_supply_get(self, request: operations.DaysSupplyDaysSupplyGetRequest) -> operations.DaysSupplyDaysSupplyGetResponse:
        r"""Days worth of supply left on dealer lots
        Average, median, standard deviation, population variance, and whole region average of the 
        days of supply left on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
        a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
        The average field may differ from the whole region average, especially when dealers are out of 
        a given model. 
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/daysSupply"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DaysSupplyDaysSupplyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def days_to_sell_days_to_sell_get(self, request: operations.DaysToSellDaysToSellGetRequest) -> operations.DaysToSellDaysToSellGetResponse:
        r"""Days a vehicle takes to sell
        Average, median, standard deviation, population variance, and whole region average of the 
        number of days a vehicle spends on dealer lots for a given brand and region. The average, median, stdDev, and pVar fields are calculated on
        a dealer by dealer basis while the whole region average treats the entire region like a single dealership. 
        The average field may differ from the whole region average.
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/daysToSell"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DaysToSellDaysToSellGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealers_get_dealers_by_id_get(self, request: operations.GetDealersGetDealersByIDGetRequest) -> operations.GetDealersGetDealersByIDGetResponse:
        r"""Premium. Dealers by ID
        Premium. Dealership information using the internal ID. Returns name, address, state, zipCode, and ID for a single dealer in the same format as the /getDealers endpoint.
        Dealer IDs are generally retrieved via the /getDealers or /getDealersByRegion endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getDealersByID"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersGetDealersByIDGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealershipDataResp])
                res.dealership_data_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealers_get_dealers_by_region_get(self, request: operations.GetDealersGetDealersByRegionGetRequest) -> operations.GetDealersGetDealersByRegionGetResponse:
        r"""Premium. Dealers in a region.
        Premium. Dealership information in a given region. Returns name, address, state, zipCode, and IDs. Results are paginated with up to 30 results per page.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getDealersByRegion"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersGetDealersByRegionGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealershipDataPaginatedResp])
                res.dealership_data_paginated_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealers_get_dealers_get(self, request: operations.GetDealersGetDealersGetRequest) -> operations.GetDealersGetDealersGetResponse:
        r"""Premium. Dealers in a zip code.
        Premium. Dealership information in a given zip code using the first 4 digits. Returns name, address, state, zipCode, and IDs.
        For example a call with the zip code 92701 would return dealers with zip codes in the range [92700, 92709]
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getDealers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersGetDealersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealershipDataResp])
                res.dealership_data_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_history2_vehicle_history_get(self, request: operations.GetHistory2VehicleHistoryGetRequest) -> operations.GetHistory2VehicleHistoryGetResponse:
        r"""Premium. Simple Vehicle History Report
        Premium. Provides a simple report detailing a vechicle's sales history at dealerships. Data includes the name of the dealership, dates it was for sale,
        price, new/used condition, mileage, dealership state, and dealership zip code. Data availability goes back to early 2016. 
        
        If your use case involves checking if a vehicle has appeared on the open market on or after a given date see 
        the /vehicleSeen endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vehicleHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHistory2VehicleHistoryGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HistoryResp])
                res.history_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    