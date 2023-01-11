import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostWalletAccountIDContractPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostWalletAccountIDContractRequest:
    path_params: PostWalletAccountIDContractPathParams = dataclasses.field()
    

@dataclasses.dataclass
class PostWalletAccountIDContractResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
