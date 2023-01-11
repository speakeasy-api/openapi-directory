import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class HeavyEquipmentSearch:
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

    
    def get_listing_heavy_equipment_id_(self, request: operations.GetListingHeavyEquipmentIDRequest) -> operations.GetListingHeavyEquipmentIDResponse:
        r"""Heavy equipment listing by id
        Get a particular Heavy equipment listing by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/heavy-equipment/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingHeavyEquipmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HeavyEquipmentsListing])
                res.heavy_equipments_listing = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_heavy_equipment_id_extra(self, request: operations.GetListingHeavyEquipmentIDExtraRequest) -> operations.GetListingHeavyEquipmentIDExtraResponse:
        r"""Long text Heavy equipment Listings attributes for Listing with the given id
        Get Heavy equipment listing options, features, seller comments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/heavy-equipment/{id}/extra", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingHeavyEquipmentIDExtraResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingExtraAttributes])
                res.listing_extra_attributes = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_listing_heavy_equipment_id_media(self, request: operations.GetListingHeavyEquipmentIDMediaRequest) -> operations.GetListingHeavyEquipmentIDMediaResponse:
        r"""Listing media by id
        Get listing media (photo, photos) by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/listing/heavy-equipment/{id}/media", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListingHeavyEquipmentIDMediaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListingMedia])
                res.listing_media = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_heavy_equipment_active(self, request: operations.GetSearchHeavyEquipmentActiveRequest) -> operations.GetSearchHeavyEquipmentActiveResponse:
        r"""Gets active heavy equipment listings for the given search criteria
        This endpoint provides search on heavy equipment inventory. This API produces a list of currently active heavy equipments from the market for the given search criteria. The API results are limited to allow pagination upto 5000 rows. 
         The search API facilitates the following use cases - 
        1. Search heavy equipments around a given geo-point within a given radius 
        2. Search heavy equipments for a specific year / make / model or combination of these 
        3. Search heavy equipments matching multiple year, make, model combinatins in the same search request
        4. Filter results by most heavy equipment specification attributes
        5. Filter heavy equipments within a given price / miles range
        6. Specify a sort order for the results on price / miles / listed date 
        7. Search heavy equipments for a given City / State combination 
        8. Get Facets to build the search drill downs 
        9. Get Market averages for price/miles for your search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/heavy-equipment/active"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchHeavyEquipmentActiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HeavyEquipmentsSearchResponse])
                res.heavy_equipments_search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_search_heavy_equipment_auto_complete(self, request: operations.GetSearchHeavyEquipmentAutoCompleteRequest) -> operations.GetSearchHeavyEquipmentAutoCompleteResponse:
        r"""API for auto-completion of inputs
        Auto-complete the inputs of your end users
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/search/heavy-equipment/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchHeavyEquipmentAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAutoCompleteResponse])
                res.search_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    