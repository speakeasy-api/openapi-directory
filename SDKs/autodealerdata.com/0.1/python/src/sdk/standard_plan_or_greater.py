import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class StandardPlanOrGreater:
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

    
    def get_brand_names_get_brands_get(self, request: operations.GetBrandNamesGetBrandsGetRequest) -> operations.GetBrandNamesGetBrandsGetResponse:
        r"""Get a list of brand names
        Get vehicle brand names. 
        
        These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getBrands"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrandNamesGetBrandsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BrandResp])
                res.brand_resp = out
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

    
    def get_model_names_all_get_inactive_models_get(self, request: operations.GetModelNamesAllGetInactiveModelsGetRequest) -> operations.GetModelNamesAllGetInactiveModelsGetResponse:
        r"""Get a list of model names including discontinued models
        Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
        they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
        endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
        someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time. 
        
        These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getInactiveModels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelNamesAllGetInactiveModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModelResp])
                res.model_resp = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def get_model_names_get_models_get(self, request: operations.GetModelNamesGetModelsGetRequest) -> operations.GetModelNamesGetModelsGetResponse:
        r"""Get a list of model names
        Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have 
        sold less than 10 vehicles in the last month and a half.
        
        These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getModels"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetModelNamesGetModelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModelResp])
                res.model_resp = out
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

    
    def get_regions_get_regions_get(self, request: operations.GetRegionsGetRegionsGetRequest) -> operations.GetRegionsGetRegionsGetResponse:
        r"""Get a list of region names
        Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
        when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRegions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRegionsGetRegionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegionResp])
                res.region_resp = out
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

    
    def vin_decode_vin_decode_get(self, request: operations.VinDecodeVinDecodeGetRequest) -> operations.VinDecodeVinDecodeGetResponse:
        r"""Vin decoder and Recall Info
        Decodes the provided North American vin and provides recall information if available. 
        We require at least the first 12 out of 17 characters in the vin to attempt a decode. The vin is not case sensitive.
        If passEmpty (default False) is True we will also include the empty fields in the response json. 
        If includeRecall (default True) is True we will include recall data reported to the NHTSA. Set False for a faster response.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/vinDecode"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VinDecodeVinDecodeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenericResponse])
                res.generic_response = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    