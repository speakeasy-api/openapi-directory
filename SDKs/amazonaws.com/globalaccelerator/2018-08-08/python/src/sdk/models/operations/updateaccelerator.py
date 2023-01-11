import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import updateacceleratorrequest as shared_updateacceleratorrequest
from ..shared import updateacceleratorresponse as shared_updateacceleratorresponse

class UpdateAcceleratorXAmzTargetEnum(str, Enum):
    GLOBAL_ACCELERATOR_V20180706_UPDATE_ACCELERATOR = "GlobalAccelerator_V20180706.UpdateAccelerator"


@dataclasses.dataclass
class UpdateAcceleratorHeaders:
    x_amz_target: UpdateAcceleratorXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAcceleratorRequest:
    headers: UpdateAcceleratorHeaders = dataclasses.field()
    request: shared_updateacceleratorrequest.UpdateAcceleratorRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateAcceleratorResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accelerator_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    internal_service_error_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_argument_exception: Optional[Any] = dataclasses.field(default=None)
    update_accelerator_response: Optional[shared_updateacceleratorresponse.UpdateAcceleratorResponse] = dataclasses.field(default=None)
    
