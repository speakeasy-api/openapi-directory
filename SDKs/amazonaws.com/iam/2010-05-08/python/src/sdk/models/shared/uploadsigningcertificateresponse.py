import dataclasses
from ..shared import signingcertificate as shared_signingcertificate


@dataclasses.dataclass
class UploadSigningCertificateResponse:
    r"""UploadSigningCertificateResponse
    Contains the response to a successful <a>UploadSigningCertificate</a> request. 
    """
    
    certificate: shared_signingcertificate.SigningCertificate = dataclasses.field()
    
