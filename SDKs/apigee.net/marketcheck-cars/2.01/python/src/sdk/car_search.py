import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CarSearch:
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

    
    def auto_complete(self, request: operations.AutoCompleteRequest) -> operations.AutoCompleteResponse:
        r"""API for auto-completion of inputs
        Auto-complete the inputs of your end users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAutoCompleteResponse])
                res.search_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing(self, request: operations.GetListingRequest) -> operations.GetListingResponse:
        r"""Listing by id
        Get a particular dealer listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_car_dealer_inventory_active(self, request: operations.GetCarDealerInventoryActiveRequest) -> operations.GetCarDealerInventoryActiveResponse:
        r"""Get dealers active inventory
        Get dealers active inventory
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/car/dealer/inventory/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCarDealerInventoryActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_auction_id_(self, request: operations.GetListingCarAuctionIDRequest) -> operations.GetListingCarAuctionIDResponse:
        r"""Listing by id
        Get a particular auction listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/auction/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarAuctionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_auction_id_extra(self, request: operations.GetListingCarAuctionIDExtraRequest) -> operations.GetListingCarAuctionIDExtraResponse:
        r"""Long text Listings attributes for Listing with the given id
        Get listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/auction/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarAuctionIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_auction_id_media(self, request: operations.GetListingCarAuctionIDMediaRequest) -> operations.GetListingCarAuctionIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/auction/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarAuctionIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_fsbo_id_(self, request: operations.GetListingCarFsboIDRequest) -> operations.GetListingCarFsboIDResponse:
        r"""Listing by id
        Get a particular private party listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/fsbo/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarFsboIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Listing])
                res.listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_fsbo_id_extra(self, request: operations.GetListingCarFsboIDExtraRequest) -> operations.GetListingCarFsboIDExtraResponse:
        r"""Long text Listings attributes for Listing with the given id
        Get listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/fsbo/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarFsboIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_fsbo_id_media(self, request: operations.GetListingCarFsboIDMediaRequest) -> operations.GetListingCarFsboIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/fsbo/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarFsboIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_id_extra(self, request: operations.GetListingCarIDExtraRequest) -> operations.GetListingCarIDExtraResponse:
        r"""Long text Listings attributes for Listing with the given id
        Get listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_car_id_media(self, request: operations.GetListingCarIDMediaRequest) -> operations.GetListingCarIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/car/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingCarIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_car_auction_active(self, request: operations.GetSearchCarAuctionActiveRequest) -> operations.GetSearchCarAuctionActiveResponse:
        r"""Gets active auction car listings for the given search criteria
        This API produces a list of currently active auction cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search Cars around a given geo-point within a given radius 
        2. Search cars for a specific year / make / model or combination of these 
        3. Search cars matching multiple year, make, model combinatins in the same search request
        4. Filter results by most car specification attributes
        5. Search for similar cars by VIN or Taxonomy VIN 
        6. Filter cars within a given price / miles / days on market (dom) range
        7. Specify a sort order for the results on price / miles / dom / listed date 
        8. Search cars for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles/dom for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/auction/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarAuctionActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_car_fsbo_active(self, request: operations.GetSearchCarFsboActiveRequest) -> operations.GetSearchCarFsboActiveResponse:
        r"""Gets active private party car listings for the given search criteria
        This API produces a list of currently active FSBO cars from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search Cars around a given geo-point within a given radius 
        2. Search cars for a specific year / make / model or combination of these 
        3. Search cars matching multiple year, make, model combinatins in the same search request
        4. Filter results by most car specification attributes
        5. Search for similar cars by VIN or Taxonomy VIN 
        6. Filter cars within a given price / miles / days on market (dom) range
        7. Specify a sort order for the results on price / miles / dom / listed date 
        8. Search cars for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles/dom for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/fsbo/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarFsboActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_car_recents(self, request: operations.GetSearchCarRecentsRequest) -> operations.GetSearchCarRecentsResponse:
        r"""Gets Recent car listings for the given search criteria
        This API produces a list of recently active (past 90 days) cars from the market for the given search criteria
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/recents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarRecentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def search(self, request: operations.SearchRequest) -> operations.SearchResponse:
        r"""Gets active car listings for the given search criteria
        This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active cars from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
         The search API facilitates the following use cases - 
        1. Search Cars around a given geo-point within a given radius 
        2. Search cars for a specific year / make / model or combination of these 
        3. Search cars matching multiple year, make, model combinatins in the same search request
        4. Filter results by most car specification attributes
        5. Search for similar cars by VIN or Taxonomy VIN 
        6. Filter cars within a given price / miles / days on market (dom) range
        7. Specify a sort order for the results on price / miles / dom / listed date 
        8. Search cars for a given City / State combination 
        9. Get Facets to build the search drill downs 
        10. Get Market averages for price/miles/dom for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/car/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    