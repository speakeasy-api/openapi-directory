"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import removeattributesresponse as shared_removeattributesresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RemoveAttributesRequestBodyUpdateAttributesRequest:
    r"""Specifies one or more attributes to remove from all the endpoints that are associated with an application."""
    
    blacklist: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Blacklist'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class RemoveAttributesRequestBody:
    
    update_attributes_request: RemoveAttributesRequestBodyUpdateAttributesRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('UpdateAttributesRequest') }})
    r"""Specifies one or more attributes to remove from all the endpoints that are associated with an application."""  
    

@dataclasses.dataclass
class RemoveAttributesRequest:
    
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console."""  
    attribute_type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'attribute-type', 'style': 'simple', 'explode': False }})
    r"""<p>The type of attribute or attributes to remove. Valid values are:</p> <ul><li><p>endpoint-custom-attributes - Custom attributes that describe endpoints, such as the date when an associated user opted in or out of receiving communications from you through a specific type of channel.</p></li> <li><p>endpoint-metric-attributes - Custom metrics that your app reports to Amazon Pinpoint for endpoints, such as the number of app sessions or the number of items left in a cart.</p></li> <li><p>endpoint-user-attributes - Custom attributes that describe users, such as first name, last name, and age.</p></li></ul>"""  
    request_body: RemoveAttributesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class RemoveAttributesResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""BadRequestException"""  
    forbidden_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ForbiddenException"""  
    internal_server_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalServerErrorException"""  
    method_not_allowed_exception: Optional[Any] = dataclasses.field(default=None)
    r"""MethodNotAllowedException"""  
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NotFoundException"""  
    payload_too_large_exception: Optional[Any] = dataclasses.field(default=None)
    r"""PayloadTooLargeException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    remove_attributes_response: Optional[shared_removeattributesresponse.RemoveAttributesResponse] = dataclasses.field(default=None)
    r"""Success"""  
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    r"""TooManyRequestsException"""  
    