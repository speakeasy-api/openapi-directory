import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostErc20AddressPathParams:
    address: str = dataclasses.field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostErc20AddressRequest:
    path_params: PostErc20AddressPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostErc20AddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
