import dataclasses
from typing import Optional
from ..shared import hsmclientcertificatelist as shared_hsmclientcertificatelist


@dataclasses.dataclass
class HsmClientCertificateMessage:
    r"""HsmClientCertificateMessage
    <p/>
    """
    
    hsm_client_certificates: Optional[list[shared_hsmclientcertificatelist.HsmClientCertificateList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
