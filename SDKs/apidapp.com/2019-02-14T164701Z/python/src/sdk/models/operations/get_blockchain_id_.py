import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetBlockchainIDPathParams:
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBlockchainIDSecurity:
    key2: shared_security.SchemeKey2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetBlockchainIDRequest:
    path_params: GetBlockchainIDPathParams = dataclasses.field()
    security: GetBlockchainIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetBlockchainIDResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
