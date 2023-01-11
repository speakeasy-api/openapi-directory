import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class DealerAPI:
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

    
    def dealer_search(self, request: operations.DealerSearchRequest) -> operations.DealerSearchResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/car"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DealerSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer(self, request: operations.GetDealerRequest) -> operations.GetDealerResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/car/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer_heavy_equipment_id_(self, request: operations.GetDealerHeavyEquipmentIDRequest) -> operations.GetDealerHeavyEquipmentIDResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/heavy-equipment/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerHeavyEquipmentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer_motorcycle_id_(self, request: operations.GetDealerMotorcycleIDRequest) -> operations.GetDealerMotorcycleIDResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/motorcycle/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerMotorcycleIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealer_rv_id_(self, request: operations.GetDealerRvIDRequest) -> operations.GetDealerRvIDResponse:
        r"""Dealer by id
        Get a particular dealer's information by its id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/dealer/rv/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealerRvIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Dealer])
                res.dealer = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealers_heavy_equipment(self, request: operations.GetDealersHeavyEquipmentRequest) -> operations.GetDealersHeavyEquipmentResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/heavy-equipment"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersHeavyEquipmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealers_motorcycle(self, request: operations.GetDealersMotorcycleRequest) -> operations.GetDealersMotorcycleResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/motorcycle"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersMotorcycleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_dealers_rv(self, request: operations.GetDealersRvRequest) -> operations.GetDealersRvResponse:
        r"""Find car dealers around
        The dealers API returns a list of dealers around a given point and radius.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/dealers/rv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDealersRvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DealersResponse])
                res.dealers_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    