import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getlifecyclepolicyinput as shared_getlifecyclepolicyinput
from ..shared import getlifecyclepolicyoutput as shared_getlifecyclepolicyoutput

class GetLifecyclePolicyXAmzTargetEnum(str, Enum):
    MEDIA_STORE_20170901_GET_LIFECYCLE_POLICY = "MediaStore_20170901.GetLifecyclePolicy"


@dataclasses.dataclass
class GetLifecyclePolicyHeaders:
    x_amz_target: GetLifecyclePolicyXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLifecyclePolicyRequest:
    headers: GetLifecyclePolicyHeaders = dataclasses.field()
    request: shared_getlifecyclepolicyinput.GetLifecyclePolicyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetLifecyclePolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    container_in_use_exception: Optional[Any] = dataclasses.field(default=None)
    container_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    get_lifecycle_policy_output: Optional[shared_getlifecyclepolicyoutput.GetLifecyclePolicyOutput] = dataclasses.field(default=None)
    internal_server_error: Optional[Any] = dataclasses.field(default=None)
    policy_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    
