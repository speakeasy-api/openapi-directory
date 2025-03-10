"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import createsubscriberrequest as shared_createsubscriberrequest
from enum import Enum
from typing import Any, Optional

class CreateSubscriberXAmzTargetEnum(str, Enum):
    AWS_BUDGET_SERVICE_GATEWAY_CREATE_SUBSCRIBER = 'AWSBudgetServiceGateway.CreateSubscriber'


@dataclasses.dataclass
class CreateSubscriberRequest:
    
    create_subscriber_request: shared_createsubscriberrequest.CreateSubscriberRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: CreateSubscriberXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CreateSubscriberResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    access_denied_exception: Optional[Any] = dataclasses.field(default=None)
    r"""AccessDeniedException"""  
    create_subscriber_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Success"""  
    creation_limit_exceeded_exception: Optional[Any] = dataclasses.field(default=None)
    r"""CreationLimitExceededException"""  
    duplicate_record_exception: Optional[Any] = dataclasses.field(default=None)
    r"""DuplicateRecordException"""  
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalErrorException"""  
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidParameterException"""  
    not_found_exception: Optional[Any] = dataclasses.field(default=None)
    r"""NotFoundException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    