import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startlifecyclepolicypreviewrequest as shared_startlifecyclepolicypreviewrequest
from ..shared import startlifecyclepolicypreviewresponse as shared_startlifecyclepolicypreviewresponse

class StartLifecyclePolicyPreviewXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_START_LIFECYCLE_POLICY_PREVIEW = "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview"


@dataclasses.dataclass
class StartLifecyclePolicyPreviewHeaders:
    x_amz_target: StartLifecyclePolicyPreviewXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartLifecyclePolicyPreviewRequest:
    headers: StartLifecyclePolicyPreviewHeaders = dataclasses.field()
    request: shared_startlifecyclepolicypreviewrequest.StartLifecyclePolicyPreviewRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartLifecyclePolicyPreviewResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    lifecycle_policy_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    lifecycle_policy_preview_in_progress_exception: Optional[Any] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    start_lifecycle_policy_preview_response: Optional[shared_startlifecyclepolicypreviewresponse.StartLifecyclePolicyPreviewResponse] = dataclasses.field(default=None)
    
