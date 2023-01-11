import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ExportClientVpnClientCertificateRevocationListResultStatus:
    r"""ExportClientVpnClientCertificateRevocationListResultStatus
    The current state of the client certificate revocation list.
    """
    
    code: Optional[dict[str, Any]] = dataclasses.field(default=None)
    message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ExportClientVpnClientCertificateRevocationListResult:
    certificate_revocation_list: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status: Optional[ExportClientVpnClientCertificateRevocationListResultStatus] = dataclasses.field(default=None)
    
