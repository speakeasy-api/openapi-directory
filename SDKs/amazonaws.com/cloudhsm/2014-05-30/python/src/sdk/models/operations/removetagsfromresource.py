import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import removetagsfromresourcerequest as shared_removetagsfromresourcerequest
from ..shared import removetagsfromresourceresponse as shared_removetagsfromresourceresponse

class RemoveTagsFromResourceXAmzTargetEnum(str, Enum):
    CLOUD_HSM_FRONTEND_SERVICE_REMOVE_TAGS_FROM_RESOURCE = "CloudHsmFrontendService.RemoveTagsFromResource"


@dataclasses.dataclass
class RemoveTagsFromResourceHeaders:
    x_amz_target: RemoveTagsFromResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveTagsFromResourceRequest:
    headers: RemoveTagsFromResourceHeaders = dataclasses.field()
    request: shared_removetagsfromresourcerequest.RemoveTagsFromResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveTagsFromResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    cloud_hsm_internal_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    remove_tags_from_resource_response: Optional[shared_removetagsfromresourceresponse.RemoveTagsFromResourceResponse] = dataclasses.field(default=None)
    
