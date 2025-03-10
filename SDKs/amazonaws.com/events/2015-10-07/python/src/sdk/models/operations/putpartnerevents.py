"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import putpartnereventsrequest as shared_putpartnereventsrequest
from ..shared import putpartnereventsresponse as shared_putpartnereventsresponse
from enum import Enum
from typing import Any, Optional

class PutPartnerEventsXAmzTargetEnum(str, Enum):
    AWS_EVENTS_PUT_PARTNER_EVENTS = 'AWSEvents.PutPartnerEvents'


@dataclasses.dataclass
class PutPartnerEventsRequest:
    
    put_partner_events_request: shared_putpartnereventsrequest.PutPartnerEventsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: PutPartnerEventsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class PutPartnerEventsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalException"""  
    operation_disabled_exception: Optional[Any] = dataclasses.field(default=None)
    r"""OperationDisabledException"""  
    put_partner_events_response: Optional[shared_putpartnereventsresponse.PutPartnerEventsResponse] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    