import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class PricingData:
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

    
    def get_avg_list_price_list_price_get(self, request: operations.GetAvgListPriceListPriceGetRequest) -> operations.GetAvgListPriceListPriceGetResponse:
        r"""Stats on ask price of new vehicles
        Average, median, standard deviation, and population variance of the ask price of new vehicles over the last 15 days for a given brand and region.
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listPrice"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvgListPriceListPriceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicModelStatsResp])
                res.basic_model_stats_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_avg_sale_price_sale_price_get(self, request: operations.GetAvgSalePriceSalePriceGetRequest) -> operations.GetAvgSalePriceSalePriceGetResponse:
        r"""Stats on sale price of new vehicles
        Average, median, standard deviation, and population variance of the sale price of new vehicles over the last 15 days for a given brand and region.
        
        The available brand and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/salePrice"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvgSalePriceSalePriceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicModelStatsResp])
                res.basic_model_stats_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_market3_similar_sale_price_get(self, request: operations.GetMarket3SimilarSalePriceGetRequest) -> operations.GetMarket3SimilarSalePriceGetResponse:
        r"""Premium. Simple Vehicle Market Report
        Premium. Provides the average, stdDev, and count, of the sale price and mileage of similar new and used vehicles in a given region based off the provided VIN. 
        Optionally restricts report to vehicles of the same model year and goes back up to 120 days.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/similarSalePrice"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarket3SimilarSalePriceGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SimilarSalePriceResp])
                res.similar_sale_price_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_model_sale_buckets_sale_price_histogram_get(self, request: operations.GetModelSaleBucketsSalePriceHistogramGetRequest) -> operations.GetModelSaleBucketsSalePriceHistogramGetResponse:
        r"""Histogram of sales price of new vehicles by model
        Histogram of the sale price of vehicles over the last 45 days for a given model and region. 
        Price buckets are grouped in units of $1000
        The available brand, model, and region names can be retrieved from their respective endpoints.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/salePriceHistogram"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelSaleBucketsSalePriceHistogramGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BucketResp])
                res.bucket_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    