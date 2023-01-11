import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listjobexecutionsforthingresponse as shared_listjobexecutionsforthingresponse


@dataclasses.dataclass
class ListJobExecutionsForThingPathParams:
    thing_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'thingName', 'style': 'simple', 'explode': False }})
    
class ListJobExecutionsForThingStatusEnum(str, Enum):
    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"
    REJECTED = "REJECTED"
    REMOVED = "REMOVED"
    CANCELED = "CANCELED"


@dataclasses.dataclass
class ListJobExecutionsForThingQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    namespace_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'namespaceId', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    status: Optional[ListJobExecutionsForThingStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListJobExecutionsForThingHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListJobExecutionsForThingRequest:
    headers: ListJobExecutionsForThingHeaders = dataclasses.field()
    path_params: ListJobExecutionsForThingPathParams = dataclasses.field()
    query_params: ListJobExecutionsForThingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListJobExecutionsForThingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_job_executions_for_thing_response: Optional[shared_listjobexecutionsforthingresponse.ListJobExecutionsForThingResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
