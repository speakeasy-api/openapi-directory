import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import programs as shared_programs


@dataclasses.dataclass
class GetOptedInProgramsSecurity:
    api_auth: shared_security.SchemeAPIAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetOptedInProgramsRequest:
    security: GetOptedInProgramsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetOptedInProgramsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    programs: Optional[shared_programs.Programs] = dataclasses.field(default=None)
    
