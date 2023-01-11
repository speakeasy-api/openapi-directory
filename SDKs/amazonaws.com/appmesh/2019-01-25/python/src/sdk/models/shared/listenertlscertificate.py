import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listenertlsacmcertificate as shared_listenertlsacmcertificate
from ..shared import listenertlsfilecertificate as shared_listenertlsfilecertificate
from ..shared import listenertlssdscertificate as shared_listenertlssdscertificate


@dataclass_json
@dataclasses.dataclass
class ListenerTLSCertificate:
    r"""ListenerTLSCertificate
    An object that represents a listener's Transport Layer Security (TLS) certificate.
    """
    
    acm: Optional[shared_listenertlsacmcertificate.ListenerTLSAcmCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acm') }})
    file: Optional[shared_listenertlsfilecertificate.ListenerTLSFileCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[shared_listenertlssdscertificate.ListenerTLSSdsCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
