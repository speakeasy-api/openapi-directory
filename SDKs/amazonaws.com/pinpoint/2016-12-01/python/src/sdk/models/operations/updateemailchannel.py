"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import updateemailchannelresponse as shared_updateemailchannelresponse
from dataclasses_json import Undefined, dataclass_json
from sdk import utils
from typing import Any, Optional


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateEmailChannelRequestBodyEmailChannelRequest:
    r"""Specifies the status and settings of the email channel for an application."""
    
    configuration_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('ConfigurationSet'), 'exclude': lambda f: f is None }})  
    enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Enabled'), 'exclude': lambda f: f is None }})  
    from_address: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('FromAddress'), 'exclude': lambda f: f is None }})  
    identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('Identity'), 'exclude': lambda f: f is None }})  
    role_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('RoleArn'), 'exclude': lambda f: f is None }})  
    

@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class UpdateEmailChannelRequestBody:
    
    email_channel_request: UpdateEmailChannelRequestBodyEmailChannelRequest = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('EmailChannelRequest') }})
    r"""Specifies the status and settings of the email channel for an application."""  
    

@dataclasses.dataclass
class UpdateEmailChannelRequest:
    
    application_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    r"""The unique identifier for the application. This identifier is displayed as the <b>Project ID</b> on the Amazon Pinpoint console."""  
    request_body: UpdateEmailChannelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class UpdateEmailChannelResponse:
    
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
    too_many_requests_exception: Optional[Any] = dataclasses.field(default=None)
    r"""TooManyRequestsException"""  
    update_email_channel_response: Optional[shared_updateemailchannelresponse.UpdateEmailChannelResponse] = dataclasses.field(default=None)
    r"""Success"""  
    