import dataclasses
from ..shared import security as shared_security
from ..shared import certificaterequest as shared_certificaterequest


@dataclasses.dataclass
class GetCertificatePdfSecurity:
    cert_auth: shared_security.SchemeCertAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class GetCertificatePdfRequest:
    request: shared_certificaterequest.CertificateRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetCertificatePdfSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetCertificatePdfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
