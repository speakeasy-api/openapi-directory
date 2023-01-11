import dataclasses
from typing import Optional
from ..shared import as2keyentity as shared_as2keyentity


@dataclasses.dataclass
class GetUsersUserIDAs2KeysPathParams:
    user_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersUserIDAs2KeysQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersUserIDAs2KeysRequest:
    path_params: GetUsersUserIDAs2KeysPathParams = dataclasses.field()
    query_params: GetUsersUserIDAs2KeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersUserIDAs2KeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    as2_key_entities: Optional[list[shared_as2keyentity.As2KeyEntity]] = dataclasses.field(default=None)
    
