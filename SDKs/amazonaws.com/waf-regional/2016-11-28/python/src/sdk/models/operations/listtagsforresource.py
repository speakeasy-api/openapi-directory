"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
import requests as requests_http
from ..shared import listtagsforresourcerequest as shared_listtagsforresourcerequest
from ..shared import listtagsforresourceresponse as shared_listtagsforresourceresponse
from enum import Enum
from typing import Any, Optional

class ListTagsForResourceXAmzTargetEnum(str, Enum):
    AWSWAF_REGIONAL_20161128_LIST_TAGS_FOR_RESOURCE = 'AWSWAF_Regional_20161128.ListTagsForResource'


@dataclasses.dataclass
class ListTagsForResourceRequest:
    
    list_tags_for_resource_request: shared_listtagsforresourcerequest.ListTagsForResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})  
    x_amz_target: ListTagsForResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})  
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})  
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})  
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})  
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})  
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})  
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})  
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})  
    

@dataclasses.dataclass
class ListTagsForResourceResponse:
    
    content_type: str = dataclasses.field()  
    status_code: int = dataclasses.field()  
    list_tags_for_resource_response: Optional[shared_listtagsforresourceresponse.ListTagsForResourceResponse] = dataclasses.field(default=None)
    r"""Success"""  
    raw_response: Optional[requests_http.Response] = dataclasses.field(default=None)  
    waf_bad_request_exception: Optional[Any] = dataclasses.field(default=None)
    r"""WAFBadRequestException"""  
    waf_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""WAFInternalErrorException"""  
    waf_invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    r"""WAFInvalidParameterException"""  
    waf_nonexistent_item_exception: Optional[Any] = dataclasses.field(default=None)
    r"""WAFNonexistentItemException"""  
    waf_tag_operation_exception: Optional[Any] = dataclasses.field(default=None)
    r"""WAFTagOperationException"""  
    waf_tag_operation_internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    r"""WAFTagOperationInternalErrorException"""  
    