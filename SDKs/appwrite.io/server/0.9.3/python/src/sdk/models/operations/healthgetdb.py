import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class HealthGetDbSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class HealthGetDbRequest:
    security: HealthGetDbSecurity = dataclasses.field()
    

@dataclasses.dataclass
class HealthGetDbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
