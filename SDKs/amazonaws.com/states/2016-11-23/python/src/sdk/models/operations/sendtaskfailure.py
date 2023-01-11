import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import sendtaskfailureinput as shared_sendtaskfailureinput

class SendTaskFailureXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_FAILURE = "AWSStepFunctions.SendTaskFailure"


@dataclasses.dataclass
class SendTaskFailureHeaders:
    x_amz_target: SendTaskFailureXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class SendTaskFailureRequest:
    headers: SendTaskFailureHeaders = dataclasses.field()
    request: shared_sendtaskfailureinput.SendTaskFailureInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SendTaskFailureResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_token: Optional[Any] = dataclasses.field(default=None)
    send_task_failure_output: Optional[dict[str, Any]] = dataclasses.field(default=None)
    task_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    task_timed_out: Optional[Any] = dataclasses.field(default=None)
    
