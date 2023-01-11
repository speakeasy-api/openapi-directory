

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://crediwatch.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def status_call_api_v1_status_call_get(self, request: operations.StatusCallAPIV1StatusCallGetRequest) -> operations.StatusCallAPIV1StatusCallGetResponse:
        r"""Status Call
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/status/call"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusCallAPIV1StatusCallGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatusCall])
                res.status_call = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def status_sku_api_v1_status_sku_get(self, request: operations.StatusSkuAPIV1StatusSkuGetRequest) -> operations.StatusSkuAPIV1StatusSkuGetResponse:
        r"""Status Sku
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/status/sku"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusSkuAPIV1StatusSkuGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StatusCall])
                res.status_call = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def verify_business_api_v1_verify_phone_get(self, request: operations.VerifyBusinessAPIV1VerifyPhoneGetRequest) -> operations.VerifyBusinessAPIV1VerifyPhoneGetResponse:
        r"""Verify Business
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/verify/phone"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyBusinessAPIV1VerifyPhoneGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyPhone])
                res.verify_phone = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def verify_name_api_v1_verify_name_get(self, request: operations.VerifyNameAPIV1VerifyNameGetRequest) -> operations.VerifyNameAPIV1VerifyNameGetResponse:
        r"""Verify Name
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/verify/name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyNameAPIV1VerifyNameGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyName])
                res.verify_name = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    
    def verify_sku_api_v1_verify_sku_get(self, request: operations.VerifySkuAPIV1VerifySkuGetRequest) -> operations.VerifySkuAPIV1VerifySkuGetResponse:
        r"""Verify Sku
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/v1/verify/sku"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifySkuAPIV1VerifySkuGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyPhone])
                res.verify_phone = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.HTTPValidationError])
                res.http_validation_error = out

        return res

    