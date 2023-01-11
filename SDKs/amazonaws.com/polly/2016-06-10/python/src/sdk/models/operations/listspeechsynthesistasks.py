import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listspeechsynthesistasksoutput as shared_listspeechsynthesistasksoutput

class ListSpeechSynthesisTasksStatusEnum(str, Enum):
    SCHEDULED = "scheduled"
    IN_PROGRESS = "inProgress"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclasses.dataclass
class ListSpeechSynthesisTasksQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    status: Optional[ListSpeechSynthesisTasksStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSpeechSynthesisTasksHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSpeechSynthesisTasksRequest:
    headers: ListSpeechSynthesisTasksHeaders = dataclasses.field()
    query_params: ListSpeechSynthesisTasksQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSpeechSynthesisTasksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_next_token_exception: Optional[Any] = dataclasses.field(default=None)
    list_speech_synthesis_tasks_output: Optional[shared_listspeechsynthesistasksoutput.ListSpeechSynthesisTasksOutput] = dataclasses.field(default=None)
    service_failure_exception: Optional[Any] = dataclasses.field(default=None)
    
