import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PostAccountSecurity:
    key2: shared_security.SchemeKey2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostAccountRequest:
    security: PostAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostAccountResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    empty: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
