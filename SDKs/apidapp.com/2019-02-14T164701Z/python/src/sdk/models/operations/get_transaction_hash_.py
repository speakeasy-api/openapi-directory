import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetTransactionHashPathParams:
    hash: str = dataclasses.field(metadata={'path_param': { 'field_name': 'hash', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTransactionHashSecurity:
    key2: shared_security.SchemeKey2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class GetTransactionHashRequest:
    path_params: GetTransactionHashPathParams = dataclasses.field()
    security: GetTransactionHashSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetTransactionHashResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
