import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getworkflowexecutionhistoryinput as shared_getworkflowexecutionhistoryinput
from ..shared import history as shared_history


@dataclasses.dataclass
class GetWorkflowExecutionHistoryQueryParams:
    maximum_page_size: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maximumPageSize', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextPageToken', 'style': 'form', 'explode': True }})
    
class GetWorkflowExecutionHistoryXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_GET_WORKFLOW_EXECUTION_HISTORY = "SimpleWorkflowService.GetWorkflowExecutionHistory"


@dataclasses.dataclass
class GetWorkflowExecutionHistoryHeaders:
    x_amz_target: GetWorkflowExecutionHistoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWorkflowExecutionHistoryRequest:
    headers: GetWorkflowExecutionHistoryHeaders = dataclasses.field()
    query_params: GetWorkflowExecutionHistoryQueryParams = dataclasses.field()
    request: shared_getworkflowexecutionhistoryinput.GetWorkflowExecutionHistoryInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetWorkflowExecutionHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    history: Optional[shared_history.History] = dataclasses.field(default=None)
    operation_not_permitted_fault: Optional[Any] = dataclasses.field(default=None)
    unknown_resource_fault: Optional[Any] = dataclasses.field(default=None)
    
