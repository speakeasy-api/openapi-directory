"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import createlocationefsrequest as shared_createlocationefsrequest
from ..shared import createlocationefsresponse as shared_createlocationefsresponse
from enum import Enum
from typing import Any, Optional

class CreateLocationEfsXAmzTargetEnum(str, Enum):
    FMRS_SERVICE_CREATE_LOCATION_EFS = 'FmrsService.CreateLocationEfs'


@dataclasses.dataclass
class CreateLocationEfsRequest:
    
    create_location_efs_request: shared_createlocationefsrequest.CreateLocationEfsRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: CreateLocationEfsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class CreateLocationEfsResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    create_location_efs_response: Optional[shared_createlocationefsresponse.CreateLocationEfsResponse] = dataclasses.field(default=None)
    r"""Success"""  
    internal_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalException"""  
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidRequestException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    