import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import sendtasksuccessinput as shared_sendtasksuccessinput

class SendTaskSuccessXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_SUCCESS = "AWSStepFunctions.SendTaskSuccess"


@dataclasses.dataclass
class SendTaskSuccessHeaders:
    x_amz_target: SendTaskSuccessXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendTaskSuccessRequest:
    headers: SendTaskSuccessHeaders = dataclasses.field()
    request: shared_sendtasksuccessinput.SendTaskSuccessInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendTaskSuccessResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_output: Optional[Any] = dataclasses.field(default=None)
    invalid_token: Optional[Any] = dataclasses.field(default=None)
    send_task_success_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    task_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    task_timed_out: Optional[Any] = dataclasses.field(default=None)
    
