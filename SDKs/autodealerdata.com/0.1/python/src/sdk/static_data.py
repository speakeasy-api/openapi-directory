import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class StaticData:
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

    