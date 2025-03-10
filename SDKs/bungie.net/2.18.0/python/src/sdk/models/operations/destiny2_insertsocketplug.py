"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import destiny_responses_destinyitemchangeresponse as shared_destiny_responses_destinyitemchangeresponse
from typing import Optional


@dataclasses.dataclass
class Destiny2InsertSocketPlug200Wildcard:
    r"""Look at the Response property for more information about the nature of this response"""
    
    detailed_error_trace: Optional[str] = dataclasses.field(default=None)  
    error_code: Optional[int] = dataclasses.field(default=None)  
    error_status: Optional[str] = dataclasses.field(default=None)  
    message: Optional[str] = dataclasses.field(default=None)  
    message_data: Optional[dict[str, str]] = dataclasses.field(default=None)  
    response: Optional[shared_destiny_responses_destinyitemchangeresponse.DestinyResponsesDestinyItemChangeResponse] = dataclasses.field(default=None)  
    throttle_seconds: Optional[int] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class Destiny2InsertSocketPlugResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    body: Optional[bytes] = dataclasses.field(default=None)  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    