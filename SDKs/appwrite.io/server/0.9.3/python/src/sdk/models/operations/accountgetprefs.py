import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class AccountGetPrefsSecurity:
    jwt: shared_security.SchemeJwt = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class AccountGetPrefsRequest:
    security: AccountGetPrefsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class AccountGetPrefsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preferences: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
