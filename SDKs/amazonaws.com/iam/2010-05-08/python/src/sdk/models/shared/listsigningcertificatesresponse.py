import dataclasses
from typing import Optional
from ..shared import signingcertificate as shared_signingcertificate


@dataclasses.dataclass
class ListSigningCertificatesResponse:
    r"""ListSigningCertificatesResponse
    Contains the response to a successful <a>ListSigningCertificates</a> request. 
    """
    
    certificates: list[shared_signingcertificate.SigningCertificate] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
