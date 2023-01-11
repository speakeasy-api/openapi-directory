import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class OemIncentiveSearch:
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

    
    def get_search_car_incentive_oem(self, request: operations.GetSearchCarIncentiveOemRequest) -> operations.GetSearchCarIncentiveOemResponse:
        r"""Gets oem incentive listings for the given search criteria
        This endpoint is the meat of the API and serves many purposes. This API produces a list of currently active oem incentive from the market for the given search criteria. The API results are limited to allow pagination upto 10000 rows. 
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
        
        url = base_url.removesuffix("/") + "/search/car/incentive/oem"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSearchCarIncentiveOemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchResponse])
                res.search_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    