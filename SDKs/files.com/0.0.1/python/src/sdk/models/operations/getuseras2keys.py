import dataclasses
from typing import Optional
from ..shared import as2keyentity as shared_as2keyentity


@dataclasses.dataclass
class GetUserAs2KeysQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUserAs2KeysRequest:
    query_params: GetUserAs2KeysQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserAs2KeysResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    as2_key_entities: Optional[list[shared_as2keyentity.As2KeyEntity]] = dataclasses.field(default=None)
    
