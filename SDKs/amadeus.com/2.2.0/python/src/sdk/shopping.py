import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Shopping:
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

    
    def get_flight_offers(self, request: operations.GetFlightOffersRequest) -> operations.GetFlightOffersResponse:
        r"""Return list of Flight Offers based on searching criteria.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shopping/flight-offers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFlightOffersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.success = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_400 = out
        else:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_500 = out

        return res

    
    def search_flight_offers(self, request: operations.SearchFlightOffersRequest) -> operations.SearchFlightOffersResponse:
        r"""Return list of Flight Offers based on posted searching criteria.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/shopping/flight-offers"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchFlightOffersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.success = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_400 = out
        else:
            if utils.match_content_type(content_type, "application/vnd.amadeus+json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.error_500 = out

        return res

    