import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listjobsresponse as shared_listjobsresponse

class ListJobsStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    CANCELED = "CANCELED"
    COMPLETED = "COMPLETED"
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS"

class ListJobsTargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"


@dataclasses.dataclass
class ListJobsQueryParams:
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    namespace_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'namespaceId', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    status: Optional[ListJobsStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    target_selection: Optional[ListJobsTargetSelectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'targetSelection', 'style': 'form', 'explode': True }})
    thing_group_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'thingGroupId', 'style': 'form', 'explode': True }})
    thing_group_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'thingGroupName', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListJobsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListJobsRequest:
    headers: ListJobsHeaders = dataclasses.field()
    query_params: ListJobsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListJobsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    invalid_request_exception: Optional[Any] = dataclasses.field(default=None)
    list_jobs_response: Optional[shared_listjobsresponse.ListJobsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    service_unavailable_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    
