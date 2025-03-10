"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Any, Optional

class EnumAPI:
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
        
    def enum_api_get_order_states(self) -> operations.EnumAPIGetOrderStatesResponse:
        r"""Returns a list with all defined orderstates"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/api/v1/enums/orderstates'
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.EnumAPIGetOrderStatesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_order_states_200_application_json_object = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_order_states_200_text_json_object = out

        return res

    def enum_api_get_payment_types(self) -> operations.EnumAPIGetPaymentTypesResponse:
        r"""Returns a list with all defined paymenttypes"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/api/v1/enums/paymenttypes'
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.EnumAPIGetPaymentTypesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_payment_types_200_application_json_object = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_payment_types_200_text_json_object = out

        return res

    def enum_api_get_shipment_types(self) -> operations.EnumAPIGetShipmentTypesResponse:
        r"""Returns a list with all defined shipmenttypes"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/api/v1/enums/shipmenttypes'
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.EnumAPIGetShipmentTypesResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_shipment_types_200_application_json_object = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_shipment_types_200_text_json_object = out

        return res

    def enum_api_get_shipping_carriers(self) -> operations.EnumAPIGetShippingCarriersResponse:
        r"""Returns a list with all defined shippingcarriers"""
        base_url = self._server_url
        
        url = base_url.removesuffix('/') + '/api/v1/enums/shippingcarriers'
        
        
        client = self._client
        
        http_res = client.request('GET', url)
        content_type = http_res.headers.get('Content-Type')

        res = operations.EnumAPIGetShippingCarriersResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            if utils.match_content_type(content_type, 'application/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_shipping_carriers_200_application_json_object = out
            if utils.match_content_type(content_type, 'text/json'):
                out = utils.unmarshal_json(http_res.text, Optional[dict[str, Any]])
                res.enum_api_get_shipping_carriers_200_text_json_object = out

        return res

    