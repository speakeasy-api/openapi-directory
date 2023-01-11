import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getactivitytaskinput as shared_getactivitytaskinput
from ..shared import getactivitytaskoutput as shared_getactivitytaskoutput

class GetActivityTaskXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_GET_ACTIVITY_TASK = "AWSStepFunctions.GetActivityTask"


@dataclasses.dataclass
class GetActivityTaskHeaders:
    x_amz_target: GetActivityTaskXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetActivityTaskRequest:
    headers: GetActivityTaskHeaders = dataclasses.field()
    request: shared_getactivitytaskinput.GetActivityTaskInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetActivityTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    activity_worker_limit_exceeded: Optional[Any] = dataclasses.field(default=None)
    get_activity_task_output: Optional[shared_getactivitytaskoutput.GetActivityTaskOutput] = dataclasses.field(default=None)
    invalid_arn: Optional[Any] = dataclasses.field(default=None)
    
