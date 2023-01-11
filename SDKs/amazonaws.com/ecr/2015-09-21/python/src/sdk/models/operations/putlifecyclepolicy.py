import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import putlifecyclepolicyrequest as shared_putlifecyclepolicyrequest
from ..shared import putlifecyclepolicyresponse as shared_putlifecyclepolicyresponse

class PutLifecyclePolicyXAmzTargetEnum(str, Enum):
    AMAZON_EC2_CONTAINER_REGISTRY_V20150921_PUT_LIFECYCLE_POLICY = "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy"


@dataclasses.dataclass
class PutLifecyclePolicyHeaders:
    x_amz_target: PutLifecyclePolicyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PutLifecyclePolicyRequest:
    headers: PutLifecyclePolicyHeaders = dataclasses.field()
    request: shared_putlifecyclepolicyrequest.PutLifecyclePolicyRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutLifecyclePolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_parameter_exception: Optional[Any] = dataclasses.field(default=None)
    put_lifecycle_policy_response: Optional[shared_putlifecyclepolicyresponse.PutLifecyclePolicyResponse] = dataclasses.field(default=None)
    repository_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    server_exception: Optional[Any] = dataclasses.field(default=None)
    
