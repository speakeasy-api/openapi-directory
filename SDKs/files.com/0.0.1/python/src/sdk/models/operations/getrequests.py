import dataclasses
from typing import Any,Optional
from ..shared import requestentity as shared_requestentity


@dataclasses.dataclass
class GetRequestsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    mine: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mine', 'style': 'form', 'explode': True }})
    path: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRequestsRequest:
    query_params: GetRequestsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRequestsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    request_entities: Optional[list[shared_requestentity.RequestEntity]] = dataclasses.field(default=None)
    
