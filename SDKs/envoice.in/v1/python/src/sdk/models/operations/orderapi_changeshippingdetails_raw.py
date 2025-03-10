"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from typing import Optional


@dataclasses.dataclass
class OrderAPIChangeShippingDetailsRawRequest:
    
    order_id: int = dataclasses.field(metadata={'query_param': { 'field_name': 'orderId', 'style': 'form', 'explode': True }})  
    request_body: bytes = dataclasses.field(metadata={'request': { 'media_type': 'text/xml' }})  
    x_auth_key: str = dataclasses.field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})  
    x_auth_secret: str = dataclasses.field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class OrderAPIChangeShippingDetailsRawResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    