import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import completelayeruploadrequest as shared_completelayeruploadrequest
from ..shared import completelayeruploadresponse as shared_completelayeruploadresponse

class CompleteLayerUploadXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_COMPLETE_LAYER_UPLOAD = "SpencerFrontendService.CompleteLayerUpload"


@dataclasses.dataclass
class CompleteLayerUploadHeaders:
    x_amz_target: CompleteLayerUploadXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CompleteLayerUploadRequest:
    headers: CompleteLayerUploadHeaders = dataclasses.field()
    request: shared_completelayeruploadrequest.CompleteLayerUploadRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CompleteLayerUploadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    complete_layer_upload_response: Optional[shared_completelayeruploadresponse.CompleteLayerUploadResponse] = dataclasses.field(default=None)
    empty_upload_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_layer_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    layer_already_exists_exception: Optional[Any] = dataclasses.field(default=None)
    layer_part_too_small_exception: Optional[Any] = dataclasses.field(default=None)
    registry_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    unsupported_command_exception: Optional[Any] = dataclasses.field(default=None)
    upload_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
