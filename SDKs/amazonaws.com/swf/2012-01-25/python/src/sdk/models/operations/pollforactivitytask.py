import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import pollforactivitytaskinput as shared_pollforactivitytaskinput
from ..shared import activitytask as shared_activitytask

class PollForActivityTaskXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_POLL_FOR_ACTIVITY_TASK = "SimpleWorkflowService.PollForActivityTask"


@dataclasses.dataclass
class PollForActivityTaskHeaders:
    x_amz_target: PollForActivityTaskXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PollForActivityTaskRequest:
    headers: PollForActivityTaskHeaders = dataclasses.field()
    request: shared_pollforactivitytaskinput.PollForActivityTaskInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PollForActivityTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    activity_task: Optional[shared_activitytask.ActivityTask] = dataclasses.field(default=None)
    limit_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_fault: Optional[Any] = dataclasses.field(default=None)
    
