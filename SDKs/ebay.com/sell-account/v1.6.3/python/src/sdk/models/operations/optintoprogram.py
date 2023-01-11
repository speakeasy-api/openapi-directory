import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import program as shared_program


@dataclasses.dataclass
class OptInToProgramSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OptInToProgramRequest:
    request: shared_program.Program = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: OptInToProgramSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OptInToProgramResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    opt_in_to_program_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
