import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import countopenworkflowexecutionsinput as shared_countopenworkflowexecutionsinput
from ..shared import workflowexecutioncount as shared_workflowexecutioncount

class CountOpenWorkflowExecutionsXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_COUNT_OPEN_WORKFLOW_EXECUTIONS = "SimpleWorkflowService.CountOpenWorkflowExecutions"


@dataclasses.dataclass
class CountOpenWorkflowExecutionsHeaders:
    x_amz_target: CountOpenWorkflowExecutionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CountOpenWorkflowExecutionsRequest:
    headers: CountOpenWorkflowExecutionsHeaders = dataclasses.field()
    request: shared_countopenworkflowexecutionsinput.CountOpenWorkflowExecutionsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CountOpenWorkflowExecutionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_fault: Optional[Any] = dataclasses.field(default=None)
    workflow_execution_count: Optional[shared_workflowexecutioncount.WorkflowExecutionCount] = dataclasses.field(default=None)
    
