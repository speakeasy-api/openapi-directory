import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OptionsTransactionHashPathParams:
    hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptionsTransactionHashRequest:
    path_params: OptionsTransactionHashPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OptionsTransactionHashResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
