import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import responddecisiontaskcompletedinput as shared_responddecisiontaskcompletedinput

class RespondDecisionTaskCompletedXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED = "SimpleWorkflowService.RespondDecisionTaskCompleted"


@dataclasses.dataclass
class RespondDecisionTaskCompletedHeaders:
    x_amz_target: RespondDecisionTaskCompletedXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RespondDecisionTaskCompletedRequest:
    headers: RespondDecisionTaskCompletedHeaders = dataclasses.field()
    request: shared_responddecisiontaskcompletedinput.RespondDecisionTaskCompletedInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RespondDecisionTaskCompletedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_fault: Optional[Any] = dataclasses.field(default=None)
    
