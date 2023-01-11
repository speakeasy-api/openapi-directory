import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import listdetectmitigationactionsexecutionsresponse as shared_listdetectmitigationactionsexecutionsresponse


@dataclasses.dataclass
class ListDetectMitigationActionsExecutionsQueryParams:
    end_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    task_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'taskId', 'style': 'form', 'explode': True }})
    thing_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'thingName', 'style': 'form', 'explode': True }})
    violation_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'violationId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListDetectMitigationActionsExecutionsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListDetectMitigationActionsExecutionsRequest:
    headers: ListDetectMitigationActionsExecutionsHeaders = dataclasses.field()
    query_params: ListDetectMitigationActionsExecutionsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListDetectMitigationActionsExecutionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_failure_exception: Optional[Any] = dataclasses.field(default=None)
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_detect_mitigation_actions_executions_response: Optional[shared_listdetectmitigationactionsexecutionsresponse.ListDetectMitigationActionsExecutionsResponse] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
