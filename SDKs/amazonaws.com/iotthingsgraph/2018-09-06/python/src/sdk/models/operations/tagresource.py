"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import tagresourcerequest as shared_tagresourcerequest
from enum import Enum
from typing import Any, Optional

class TagResourceXAmzTargetEnum(str, Enum):
    IOT_THINGS_GRAPH_FRONT_END_SERVICE_TAG_RESOURCE = 'IotThingsGraphFrontEndService.TagResource'


@dataclasses.dataclass
class TagResourceRequest:
    
    tag_resource_request: shared_tagresourcerequest.TagResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: TagResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class TagResourceResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InternalFailureException"""  
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""InvalidRequestException"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    resource_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ResourceAlreadyExistsException"""  
    tag_resource_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    r"""Success"""  
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    r"""ThrottlingException"""  
    