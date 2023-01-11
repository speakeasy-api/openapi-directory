import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetWalletAccountIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWalletAccountIDRequest:
    path_params: GetWalletAccountIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWalletAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
