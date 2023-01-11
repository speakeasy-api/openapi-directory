import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import error as shared_error
from ..shared import me as shared_me


@dataclasses.dataclass
class GetMeSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetMeRequest:
    security: GetMeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    me: Optional[shared_me.Me] = dataclasses.field(default=None)
    
