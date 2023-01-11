import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import addtagstoresourcerequest as shared_addtagstoresourcerequest
from ..shared import addtagstoresourceresponse as shared_addtagstoresourceresponse

class AddTagsToResourceXAmzTargetEnum(str, Enum):
    CLOUD_HSM_FRONTEND_SERVICE_ADD_TAGS_TO_RESOURCE = "CloudHsmFrontendService.AddTagsToResource"


@dataclasses.dataclass
class AddTagsToResourceHeaders:
    x_amz_target: AddTagsToResourceXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddTagsToResourceRequest:
    headers: AddTagsToResourceHeaders = dataclasses.field()
    request: shared_addtagstoresourcerequest.AddTagsToResourceRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddTagsToResourceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_tags_to_resource_response: Optional[shared_addtagstoresourceresponse.AddTagsToResourceResponse] = dataclasses.field(default=None)
    cloud_hsm_internal_exception: Optional[Any] = dataclasses.field(default=None)
    cloud_hsm_service_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    
