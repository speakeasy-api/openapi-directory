import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import introspection as shared_introspection


@dataclasses.dataclass
class GetAuthIntrospectSecurity:
    jwtsa: shared_security.SchemeJwtsa = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAuthIntrospectRequest:
    security: GetAuthIntrospectSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthIntrospectResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    introspection: Optional[shared_introspection.Introspection] = dataclasses.field(default=None)
    
