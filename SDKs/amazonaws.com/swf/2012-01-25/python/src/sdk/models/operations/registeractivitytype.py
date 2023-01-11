import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import registeractivitytypeinput as shared_registeractivitytypeinput

class RegisterActivityTypeXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_REGISTER_ACTIVITY_TYPE = "SimpleWorkflowService.RegisterActivityType"


@dataclasses.dataclass
class RegisterActivityTypeHeaders:
    x_amz_target: RegisterActivityTypeXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RegisterActivityTypeRequest:
    headers: RegisterActivityTypeHeaders = dataclasses.field()
    request: shared_registeractivitytypeinput.RegisterActivityTypeInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RegisterActivityTypeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    limit_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    type_already_exists_fault: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_fault: Optional[Any] = dataclasses.field(default=None)
    
