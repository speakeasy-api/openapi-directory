"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class MarketplacesOrdersV3Global:
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def get_marketplace_accounts_synchronization_v3(self, request: operations.GetMarketplaceAccountsSynchronizationV3Request) -> operations.GetMarketplaceAccountsSynchronizationV3Response:
        r"""Get current synchronization status between your marketplaces and BeezUP accounts"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/orders/v3/status'
        
        headers = utils.get_headers(request)
        query_params = utils.get_query_params(operations.GetMarketplaceAccountsSynchronizationV3Request, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetMarketplaceAccountsSynchronizationV3Response(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.AccountSynchronizationList])
                res.account_synchronization_list = out
        elif http_res.status_code == 304:
            res.headers = http_res.headers
            
        elif http_res.status_code == 400:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.BeezUPCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    def get_order_management_ready_marketplace_business_code(self, request: operations.GetOrderManagementReadyMarketplaceBusinessCodeRequest) -> operations.GetOrderManagementReadyMarketplaceBusinessCodeResponse:
        r"""Get the list of MarketplaceBusinessCode ready for Order Management"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/orders/v3/lov/orderManagementReadyMarketplaceBusinessCode'
        
        headers = utils.get_headers(request)
        query_params = utils.get_query_params(operations.GetOrderManagementReadyMarketplaceBusinessCodeRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GetOrderManagementReadyMarketplaceBusinessCodeResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[list[shared.ListOfValueItem]])
                res.o_m_ready_marketplace_business_code_response = out
        elif http_res.status_code == 304:
            res.headers = http_res.headers
            
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.BeezUPCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    def harvest_all_v3(self, request: operations.HarvestAllV3Request) -> operations.HarvestAllV3Response:
        r"""Send harvest request to all your marketplaces"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/orders/v3/harvest'
        
        query_params = utils.get_query_params(operations.HarvestAllV3Request, request)
        
        client = self._client
        
        http_res = client.request('POST', url, params=query_params)
        content_type = http_res.headers.get('Content-Type')

        res = operations.HarvestAllV3Response(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 202:
            res.headers = http_res.headers
            
        elif http_res.status_code == 404:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        elif http_res.status_code == 409:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.ErrorResponseMessage])
                res.error_response_message = out
        else:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.BeezUPCommonErrorResponseMessage])
                res.beez_up_common_error_response_message = out

        return res

    