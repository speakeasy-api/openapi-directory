import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listactionexecutionsinput as shared_listactionexecutionsinput
from ..shared import listactionexecutionsoutput as shared_listactionexecutionsoutput


@dataclasses.dataclass
class ListActionExecutionsQueryParams:
    max_results: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListActionExecutionsXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_LIST_ACTION_EXECUTIONS = "CodePipeline_20150709.ListActionExecutions"


@dataclasses.dataclass
class ListActionExecutionsHeaders:
    x_amz_target: ListActionExecutionsXAmzTargetEnum = dataclasses.field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListActionExecutionsRequest:
    headers: ListActionExecutionsHeaders = dataclasses.field()
    query_params: ListActionExecutionsQueryParams = dataclasses.field()
    request: shared_listactionexecutionsinput.ListActionExecutionsInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ListActionExecutionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_action_executions_output: Optional[shared_listactionexecutionsoutput.ListActionExecutionsOutput] = dataclasses.field(default=None)
    pipeline_execution_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    pipeline_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
