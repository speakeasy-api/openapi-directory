import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class OptionsErc20AddressPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class OptionsErc20AddressRequest:
    path_params: OptionsErc20AddressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class OptionsErc20AddressResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
