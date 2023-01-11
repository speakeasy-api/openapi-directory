import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listhumanloopsresponse as shared_listhumanloopsresponse

class ListHumanLoopsSortOrderEnum(str, Enum):
    ASCENDING = "Ascending"
    DESCENDING = "Descending"


@dataclasses.dataclass
class ListHumanLoopsQueryParams:
    flow_definition_arn: str = dataclasses.field(metadata={'query_param': { 'field_name': 'FlowDefinitionArn', 'style': 'form', 'explode': True }})
    creation_time_after: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CreationTimeAfter', 'style': 'form', 'explode': True }})
    creation_time_before: Optional[datetime] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'CreationTimeBefore', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    sort_order: Optional[ListHumanLoopsSortOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'SortOrder', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListHumanLoopsHeaders:
    x_amz_algorithm: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListHumanLoopsRequest:
    headers: ListHumanLoopsHeaders = dataclasses.field()
    query_params: ListHumanLoopsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListHumanLoopsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    internal_server_exception: Optional[Any] = dataclasses.field(default=None)
    list_human_loops_response: Optional[shared_listhumanloopsresponse.ListHumanLoopsResponse] = dataclasses.field(default=None)
    resource_not_found_exception: Optional[Any] = dataclasses.field(default=None)
    throttling_exception: Optional[Any] = dataclasses.field(default=None)
    validation_exception: Optional[Any] = dataclasses.field(default=None)
    
