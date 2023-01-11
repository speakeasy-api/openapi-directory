import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class FilterStoppingsPathParams:
    type: str = dataclasses.field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FilterStoppingsRequest:
    path_params: FilterStoppingsPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class FilterStoppingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    exude_response_bean: Optional[Any] = dataclasses.field(default=None)
    
