import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SalesData:
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

    
    def get_dealer_sales_region_daily_sales_get(self, request: operations.GetDealerSalesRegionDailySalesGetRequest) -> operations.GetDealerSalesRegionDailySalesGetResponse:
        r"""Brand sales by region and Day
        Get regional sales by brand and day. Most recent data is typically only 2 days old for this endpoint.
            
        The Day field is in YYYY-MM-DD format. For example if you wanted sales data from April 5th of 2020 the day field would be '2020-04-05'
        
        Data availability depends on region and goes back up to 2016.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regionDailySales"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerSalesRegionDailySalesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_dealer_sales_region_sales_get(self, request: operations.GetDealerSalesRegionSalesGetRequest) -> operations.GetDealerSalesRegionSalesGetResponse:
        r"""Premium. Brand sales by region and month
        Premium. Get regional sales by brand and month, broken down by day. Most recent data is typically only 2 days old for this endpoint.
            
        The month field is in YYYY-MM-DD format. For example if you wanted sales data from April of 2020 the month field would be '2020-04-01'
        
        Data availability depends on region and goes back up to 2016.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/regionSales"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerSalesRegionSalesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_model_used_dist_model_year_dist_get(self, request: operations.GetModelUsedDistModelYearDistGetRequest) -> operations.GetModelUsedDistModelYearDistGetResponse:
        r"""Used market share of model year by model
        Market share of used vehicles over the last 45 days by model and year. All values are relative to vehicles of the same model.
        For example: a percentOfMarket value of 25, year of 2017, and modelName of Camry means that 25% of used Camrys on the market 
        in the given region over the last 45 days were from the 2017 model year.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/modelYearDist"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelUsedDistModelYearDistGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModelYearDistResp])
                res.model_year_dist_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_region_brand_market_share_get_region_brand_market_share_get(self, request: operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest) -> operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse:
        r"""Market share of a brand in region
        Market share of a given brand in a given region by number of vehicles sold over the last 45 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegionBrandMarketShare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_region_market_share_get_region_market_share_get(self, request: operations.GetRegionMarketShareGetRegionMarketShareGetRequest) -> operations.GetRegionMarketShareGetRegionMarketShareGetResponse:
        r"""Market share of all brands in region
        Market share of a all brands in a given region by number of vehicles sold over the last 45 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegionMarketShare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionMarketShareGetRegionMarketShareGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_top_models_top_models_get(self, request: operations.GetTopModelsTopModelsGetRequest) -> operations.GetTopModelsTopModelsGetResponse:
        r"""Top models in a given region
        Sales ranking of different models by region over the last 45 days. 
        The <strong>percentOfTopSales</strong> value is the percent of the top seller the model represents. 
        
        For example: a value of 80% means that model sold 8 vehicles for every 10 of the top model sold.
        
        The other fields represent the model percent of X. The <strong>brandMarketShare</strong> field is that brand's market share of the region
        over the report's time interval.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/topModels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTopModelsTopModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TopModelResp])
                res.top_model_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    