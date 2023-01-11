import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class MotorcycleSearch:
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

    
    def get_listing_motorcycle_id_(self, request: operations.GetListingMotorcycleIDRequest) -> operations.GetListingMotorcycleIDResponse:
        r"""Motorcycle listing by id
        Get a particular Motorcycle listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/motorcycle/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingMotorcycleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MotorcycleListing])
                res.motorcycle_listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_motorcycle_id_extra(self, request: operations.GetListingMotorcycleIDExtraRequest) -> operations.GetListingMotorcycleIDExtraResponse:
        r"""Long text Motorcycle Listings attributes for Listing with the given id
        Get Motorcycle listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/motorcycle/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingMotorcycleIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_motorcycle_id_media(self, request: operations.GetListingMotorcycleIDMediaRequest) -> operations.GetListingMotorcycleIDMediaResponse:
        r"""Motorcycle listing media by id
        Get Motorcycle listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/motorcycle/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingMotorcycleIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_motorcycle_active(self, request: operations.GetSearchMotorcycleActiveRequest) -> operations.GetSearchMotorcycleActiveResponse:
        r"""Gets active motorcycle listings for the given search criteria
        This endpoint provides search on motorcycle inventory. This API produces a list of currently active motorcycles from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search motorcycles around a given geo-point within a given radius 
        2. Search motorcycles for a specific year / make / model or combination of these 
        3. Search motorcycles matching multiple year, make, model combinatins in the same search request
        4. Filter results by most motorcycle specification attributes
        5. Search for similar motorcycles by VIN or Taxonomy VIN 
        6. Filter motorcycles within a given price / miles range
        7. Specify a sort order for the results on price / miles / listed date 
        8. Search motorcycles for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/motorcycle/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchMotorcycleActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MotorcycleSearchResponse])
                res.motorcycle_search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_motorcycle_auto_complete(self, request: operations.GetSearchMotorcycleAutoCompleteRequest) -> operations.GetSearchMotorcycleAutoCompleteResponse:
        r"""API for auto-completion of inputs
        Auto-complete the inputs of your end users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/motorcycle/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchMotorcycleAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAutoCompleteResponse])
                res.search_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    