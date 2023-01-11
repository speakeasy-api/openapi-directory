import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetBatchPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBatchRequest:
    path_params: GetBatchPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    batch: Optional[Any] = dataclasses.field(default=None)
    
