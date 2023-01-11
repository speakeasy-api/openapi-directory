import dataclasses
from typing import Optional
from ..shared import hsmclientcertificate as shared_hsmclientcertificate


@dataclasses.dataclass
class CreateHsmClientCertificateResult:
    hsm_client_certificate: Optional[shared_hsmclientcertificate.HsmClientCertificate] = dataclasses.field(default=None)
    
