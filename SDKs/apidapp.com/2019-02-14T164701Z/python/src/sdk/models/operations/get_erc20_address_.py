import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetErc20AddressPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetErc20AddressRequest:
    path_params: GetErc20AddressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetErc20AddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
