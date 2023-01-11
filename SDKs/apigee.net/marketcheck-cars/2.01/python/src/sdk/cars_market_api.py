import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CarsMarketAPI:
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

    
    def get_daily_stats(self, request: operations.GetDailyStatsRequest) -> operations.GetDailyStatsResponse:
        r"""Price, Miles and Days on Market stats
        National, state and city level stats for price, miles and dom
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/stats/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDailyStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DailyStats])
                res.daily_stats = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_mds(self, request: operations.GetMdsRequest) -> operations.GetMdsResponse:
        r"""Market Days Supply
        Get the basic information on specifications for a car identified by a valid VIN
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/mds/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMdsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Mds])
                res.mds = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_popular_cars(self, request: operations.GetPopularCarsRequest) -> operations.GetPopularCarsResponse:
        r"""Get make model wise top 50 popular cars on national, state, city level
        Get make model wise top 50 popular cars on national, state, city level
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/popular/cars"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPopularCarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PopularCars])
                res.popular_cars = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_sales_count(self, request: operations.GetSalesCountRequest) -> operations.GetSalesCountResponse:
        r"""Get sales count by make, model, year, trim or taxonomy vin
        Get a sales count for city, state or national level by make, model, year, trim or taxonomy vin
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sales/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSalesCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Sales])
                res.sales = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    