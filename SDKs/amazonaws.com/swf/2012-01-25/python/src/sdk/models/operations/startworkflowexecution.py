import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import startworkflowexecutioninput as shared_startworkflowexecutioninput
from ..shared import run as shared_run

class StartWorkflowExecutionXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_START_WORKFLOW_EXECUTION = "SimpleWorkflowService.StartWorkflowExecution"


@dataclasses.dataclass
class StartWorkflowExecutionHeaders:
    x_amz_target: StartWorkflowExecutionXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class StartWorkflowExecutionRequest:
    headers: StartWorkflowExecutionHeaders = dataclasses.field()
    request: shared_startworkflowexecutioninput.StartWorkflowExecutionInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class StartWorkflowExecutionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    default_undefined_fault: Optional[Any] = dataclasses.field(default=None)
    limit_exceeded_fault: Optional[Any] = dataclasses.field(default=None)
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    run: Optional[shared_run.Run] = dataclasses.field(default=None)
    type_deprecated_fault: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_fault: Optional[Any] = dataclasses.field(default=None)
    workflow_execution_already_started_fault: Optional[Any] = dataclasses.field(default=None)
    
