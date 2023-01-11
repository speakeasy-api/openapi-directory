import dataclasses
from typing import Any,Optional
from ..shared import requestentity as shared_requestentity


@dataclasses.dataclass
class GetRequestsFoldersPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRequestsFoldersPathQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    mine: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'mine', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    sort_by: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetRequestsFoldersPathRequest:
    path_params: GetRequestsFoldersPathPathParams = dataclasses.field()
    query_params: GetRequestsFoldersPathQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRequestsFoldersPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    request_entities: Optional[list[shared_requestentity.RequestEntity]] = dataclasses.field(default=None)
    
