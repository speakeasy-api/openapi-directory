import dataclasses
from typing import Optional
from ..shared import clickwrapentity as shared_clickwrapentity


@dataclasses.dataclass
class GetClickwrapsQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetClickwrapsRequest:
    query_params: GetClickwrapsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClickwrapsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clickwrap_entities: Optional[list[shared_clickwrapentity.ClickwrapEntity]] = dataclasses.field(default=None)
    
