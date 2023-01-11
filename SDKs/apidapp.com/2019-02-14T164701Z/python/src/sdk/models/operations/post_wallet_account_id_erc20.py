import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostWalletAccountIDErc20PathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWalletAccountIDErc20Request:
    path_params: PostWalletAccountIDErc20PathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostWalletAccountIDErc20Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
