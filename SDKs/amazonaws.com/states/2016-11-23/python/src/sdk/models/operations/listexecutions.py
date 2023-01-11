import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listexecutionsinput as shared_listexecutionsinput
from ..shared import listexecutionsoutput as shared_listexecutionsoutput


@dataclasses.dataclass
class ListExecutionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListExecutionsXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_EXECUTIONS = "AWSStepFunctions.ListExecutions"


@dataclasses.dataclass
class ListExecutionsHeaders:
    x_amz_target: ListExecutionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListExecutionsRequest:
    headers: ListExecutionsHeaders = dataclasses.field()
    query_params: ListExecutionsQueryParams = dataclasses.field()
    request: shared_listexecutionsinput.ListExecutionsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListExecutionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_arn: Optional[Any] = dataclasses.field(default=None)
    invalid_token: Optional[Any] = dataclasses.field(default=None)
    list_executions_output: Optional[shared_listexecutionsoutput.ListExecutionsOutput] = dataclasses.field(default=None)
    state_machine_does_not_exist: Optional[Any] = dataclasses.field(default=None)
    state_machine_type_not_supported: Optional[Any] = dataclasses.field(default=None)
    
