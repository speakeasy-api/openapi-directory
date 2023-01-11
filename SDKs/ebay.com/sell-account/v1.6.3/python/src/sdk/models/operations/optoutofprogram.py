import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import program as shared_program


@dataclasses.dataclass
class OptOutOfProgramSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class OptOutOfProgramRequest:
    request: shared_program.Program = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: OptOutOfProgramSecurity = dataclasses.field()
    

@dataclasses.dataclass
class OptOutOfProgramResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    opt_out_of_program_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
