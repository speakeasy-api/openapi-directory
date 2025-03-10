"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations
from typing import Optional

class EcommerceDelivery:
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
        
    def confirm_carbon_offset1(self, request: operations.ConfirmCarbonOffset1RequestBody, server_url: Optional[str] = None) -> operations.ConfirmCarbonOffset1Response:
        r"""confirmCarbonOffset"""
        base_url = operations.CONFIRM_CARBON_OFFSET1_SERVERS[0]
        if server_url is not None:
            base_url = server_url
        
        url = base_url.removesuffix('/') + '/ecommerceDelivery/confirmCarbonOffset'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._client
        
        http_res = client.request('PATCH', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.ConfirmCarbonOffset1Response(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def confirm_payment1(self, request: operations.ConfirmPayment1RequestBody, server_url: Optional[str] = None) -> operations.ConfirmPayment1Response:
        r"""confirmPayment"""
        base_url = operations.CONFIRM_PAYMENT1_SERVERS[0]
        if server_url is not None:
            base_url = server_url
        
        url = base_url.removesuffix('/') + '/ecommerceDelivery/confirmPayment'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._client
        
        http_res = client.request('PATCH', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.ConfirmPayment1Response(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def confirm_payment_of_transaction1(self, request: operations.ConfirmPaymentOfTransaction1RequestBody, server_url: Optional[str] = None) -> operations.ConfirmPaymentOfTransaction1Response:
        r"""confirmTransaction"""
        base_url = operations.CONFIRM_PAYMENT_OF_TRANSACTION1_SERVERS[0]
        if server_url is not None:
            base_url = server_url
        
        url = base_url.removesuffix('/') + '/ecommerceDelivery/confirmTransaction'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._client
        
        http_res = client.request('PATCH', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.ConfirmPaymentOfTransaction1Response(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def confirms_planting2(self, request: operations.ConfirmsPlanting2RequestBody, server_url: Optional[str] = None) -> operations.ConfirmsPlanting2Response:
        r"""confirmPlanting"""
        base_url = operations.CONFIRMS_PLANTING2_SERVERS[0]
        if server_url is not None:
            base_url = server_url
        
        url = base_url.removesuffix('/') + '/ecommerceDelivery/confirmPlanting'
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request, "request", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._client
        
        http_res = client.request('PATCH', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.ConfirmsPlanting2Response(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    def ecommerce_delivery(self, request: operations.EcommerceDeliveryRequest, server_url: Optional[str] = None) -> operations.EcommerceDeliveryResponse:
        r"""ecommerceDelivery"""
        base_url = operations.ECOMMERCE_DELIVERY_SERVERS[0]
        if server_url is not None:
            base_url = server_url
        
        url = base_url.removesuffix('/') + '/ecommerceDelivery'
        
        headers = utils.get_headers(request)
        req_content_type, data, form = utils.serialize_request_body(request, "request_body", 'form')
        if req_content_type not in ('multipart/form-data', 'multipart/mixed'):
            headers['content-type'] = req_content_type
        
        client = self._client
        
        http_res = client.request('POST', url, data=data, files=form, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.EcommerceDeliveryResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        

        return res

    