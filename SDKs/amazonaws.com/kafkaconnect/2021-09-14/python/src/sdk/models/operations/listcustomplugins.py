"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import listcustompluginsresponse as shared_listcustompluginsresponse
from typing import Any, Optional


@dataclasses.dataclass
class ListCustomPluginsRequest:
    
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    r"""The maximum number of custom plugins to list in one response."""  
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    r"""If the response of a ListCustomPlugins operation is truncated, it will include a NextToken. Send this NextToken in a subsequent request to continue listing from where the previous operation left off."""  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ListCustomPluginsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""BadRequestException"""  
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ForbiddenException"""  
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerErrorException"""  
    list_custom_plugins_response: Optional[shared_listcustompluginsresponse.ListCustomPluginsResponse] = dataclasses.field(default=None)
    r"""Success"""  
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NotFoundException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ServiceUnavailableException"""  
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    r"""TooManyRequestsException"""  
    unauthorized_exception: Optional[Any] = dataclasses.field(default=None)
    r"""UnauthorizedException"""  
    