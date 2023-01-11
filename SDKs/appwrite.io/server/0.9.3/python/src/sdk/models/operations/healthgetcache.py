import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class HealthGetCacheSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class HealthGetCacheRequest:
    security: HealthGetCacheSecurity = dataclasses.field()
    

@dataclasses.dataclass
class HealthGetCacheResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
