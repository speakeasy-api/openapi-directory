import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Amz:
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

    
    def keyword_search(self, request: operations.KeywordSearchRequest) -> operations.KeywordSearchResponse:
        r"""fetch results auf a keyword search on Amazon
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/amz/amazon-search-by-keyword"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.KeywordSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeywordSearchResponse])
                res.keyword_search_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def request_buy_recommendation(self, request: operations.RequestBuyRecommendationRequest) -> operations.RequestBuyRecommendationResponse:
        r"""request buy recommendations to a given product
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/amz/amazon-lookup-buy-recommendations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestBuyRecommendationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuyRecommendationResponse])
                res.buy_recommendation_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def request_product(self, request: operations.RequestProductRequest) -> operations.RequestProductResponse:
        r"""lookup product information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/amz/amazon-lookup-product"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RequestProductResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductDetailsResponse])
                res.product_details_response = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 406:
            pass

        return res

    
    def sort_options(self) -> operations.SortOptionsResponse:
        r"""request available sort options to use in keyword search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/amz/sort-options"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SortOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SortOptionResponse])
                res.sort_option_response = out

        return res

    