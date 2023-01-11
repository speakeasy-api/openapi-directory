import dataclasses
from ..shared import security as shared_security
from ..shared import security as shared_security


@dataclasses.dataclass
class HealthGetQueueCertificatesSecurity:
    key: shared_security.SchemeKey = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared_security.SchemeProject = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class HealthGetQueueCertificatesRequest:
    security: HealthGetQueueCertificatesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class HealthGetQueueCertificatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
