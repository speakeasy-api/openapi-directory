import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import deregisterscalabletargetrequest as shared_deregisterscalabletargetrequest

class DeregisterScalableTargetXAmzTargetEnum(str, Enum):
    ANY_SCALE_FRONTEND_SERVICE_DEREGISTER_SCALABLE_TARGET = "AnyScaleFrontendService.DeregisterScalableTarget"


@dataclasses.dataclass
class DeregisterScalableTargetHeaders:
    x_amz_target: DeregisterScalableTargetXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeregisterScalableTargetRequest:
    headers: DeregisterScalableTargetHeaders = dataclasses.field()
    request: shared_deregisterscalabletargetrequest.DeregisterScalableTargetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class DeregisterScalableTargetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    concurrent_update_exception: Optional[Any] = dataclasses.field(default=None)
    deregister_scalable_target_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    internal_service_exception: Optional[Any] = dataclasses.field(default=None)
    object_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
