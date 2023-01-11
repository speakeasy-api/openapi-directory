import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OptionsWalletAccountIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptionsWalletAccountIDRequest:
    path_params: OptionsWalletAccountIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OptionsWalletAccountIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
