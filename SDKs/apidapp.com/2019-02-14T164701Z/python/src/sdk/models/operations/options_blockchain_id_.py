import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OptionsBlockchainIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptionsBlockchainIDRequest:
    path_params: OptionsBlockchainIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OptionsBlockchainIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
