import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VinDecoderAPI:
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

    
    def decode(self, request: operations.DecodeRequest) -> operations.DecodeResponse:
        r"""VIN Decoder
        Get the basic information on specifications for a car identified by a valid VIN
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/decode/car/{vin}/specs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DecodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def decode_via_epi(self, request: operations.DecodeViaEpiRequest) -> operations.DecodeViaEpiResponse:
        r"""EPI VIN Decoder
        Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/decode/car/epi/{vin}/specs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DecodeViaEpiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Build])
                res.build = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_taxonomy_terms(self, request: operations.GetTaxonomyTermsRequest) -> operations.GetTaxonomyTermsResponse:
        r"""API for getting terms from taxonomy
        Facets on taxonomy
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/specs/car/terms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxonomyTermsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpecsAutoCompleteResponse])
                res.specs_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    
    def get_specs_car_auto_complete(self, request: operations.GetSpecsCarAutoCompleteRequest) -> operations.GetSpecsCarAutoCompleteResponse:
        r"""API for auto-completion of inputs based on taxonomy
        Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/specs/car/auto-complete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSpecsCarAutoCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SpecsAutoCompleteResponse])
                res.specs_auto_complete_response = out
        else:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error])
                res.error = out

        return res

    