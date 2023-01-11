import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getexecutionhistoryinput as shared_getexecutionhistoryinput
from ..shared import getexecutionhistoryoutput as shared_getexecutionhistoryoutput


@dataclasses.dataclass
class GetExecutionHistoryQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class GetExecutionHistoryXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_GET_EXECUTION_HISTORY = "AWSStepFunctions.GetExecutionHistory"


@dataclasses.dataclass
class GetExecutionHistoryHeaders:
    x_amz_target: GetExecutionHistoryXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetExecutionHistoryRequest:
    headers: GetExecutionHistoryHeaders = dataclasses.field()
    query_params: GetExecutionHistoryQueryParams = dataclasses.field()
    request: shared_getexecutionhistoryinput.GetExecutionHistoryInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class GetExecutionHistoryResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    execution_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    get_execution_history_output: Optional[shared_getexecutionhistoryoutput.GetExecutionHistoryOutput] = dataclasses.field(default=None)
    invalid_arn: Optional[Any] = dataclasses.field(default=None)
    invalid_token: Optional[Any] = dataclasses.field(default=None)
    
