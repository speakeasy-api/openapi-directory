import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SupplyData:
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

    