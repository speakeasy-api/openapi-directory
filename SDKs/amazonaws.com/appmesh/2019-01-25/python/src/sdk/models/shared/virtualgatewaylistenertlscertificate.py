import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaylistenertlsacmcertificate as shared_virtualgatewaylistenertlsacmcertificate
from ..shared import virtualgatewaylistenertlsfilecertificate as shared_virtualgatewaylistenertlsfilecertificate
from ..shared import virtualgatewaylistenertlssdscertificate as shared_virtualgatewaylistenertlssdscertificate


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayListenerTLSCertificate:
    r"""VirtualGatewayListenerTLSCertificate
    An object that represents a listener's Transport Layer Security (TLS) certificate.
    """
    
    acm: Optional[shared_virtualgatewaylistenertlsacmcertificate.VirtualGatewayListenerTLSAcmCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acm') }})
    file: Optional[shared_virtualgatewaylistenertlsfilecertificate.VirtualGatewayListenerTLSFileCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[shared_virtualgatewaylistenertlssdscertificate.VirtualGatewayListenerTLSSdsCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
