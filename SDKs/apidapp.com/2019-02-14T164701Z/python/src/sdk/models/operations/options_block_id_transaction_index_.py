import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OptionsBlockIDTransactionIndexPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    index: str = dataclasses.field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptionsBlockIDTransactionIndexRequest:
    path_params: OptionsBlockIDTransactionIndexPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OptionsBlockIDTransactionIndexResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
