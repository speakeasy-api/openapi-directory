import dataclasses
from typing import Optional
from ..shared import clickwrapentity as shared_clickwrapentity


@dataclasses.dataclass
class GetClickwrapsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetClickwrapsIDRequest:
    path_params: GetClickwrapsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetClickwrapsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    clickwrap_entity: Optional[shared_clickwrapentity.ClickwrapEntity] = dataclasses.field(default=None)
    
