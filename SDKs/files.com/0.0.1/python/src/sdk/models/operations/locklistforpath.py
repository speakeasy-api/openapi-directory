import dataclasses
from typing import Optional
from ..shared import lockentity as shared_lockentity


@dataclasses.dataclass
class LockListForPathPathParams:
    path: str = dataclasses.field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class LockListForPathQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    include_children: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include_children', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class LockListForPathRequest:
    path_params: LockListForPathPathParams = dataclasses.field()
    query_params: LockListForPathQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class LockListForPathResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    lock_entities: Optional[list[shared_lockentity.LockEntity]] = dataclasses.field(default=None)
    
