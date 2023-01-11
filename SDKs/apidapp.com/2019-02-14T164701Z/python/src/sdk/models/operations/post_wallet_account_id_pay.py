import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostWalletAccountIDPayPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWalletAccountIDPayRequest:
    path_params: PostWalletAccountIDPayPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostWalletAccountIDPayResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
