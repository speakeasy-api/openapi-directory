import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listtagsforresourcerequest as shared_listtagsforresourcerequest
from ..shared import listtagsforresourceresponse as shared_listtagsforresourceresponse

class ListTagsForResourceXAmzTargetEnum(str, Enum):
    AWSFMS_20180101_LIST_TAGS_FOR_RESOURCE = "AWSFMS_20180101.ListTagsForResource"


@dataclasses.dataclass
class ListTagsForResourceHeaders:
    x_amz_target: ListTagsForResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListTagsForResourceRequest:
    headers: ListTagsForResourceHeaders = dataclasses.field()
    request: shared_listtagsforresourcerequest.ListTagsForResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListTagsForResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_input_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_operation_exception: Optional[Any] = dataclasses.field(default=None)
    list_tags_for_resource_response: Optional[shared_listtagsforresourceresponse.ListTagsForResourceResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
