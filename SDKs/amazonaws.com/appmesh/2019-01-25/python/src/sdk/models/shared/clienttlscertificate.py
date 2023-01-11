import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listenertlsfilecertificate as shared_listenertlsfilecertificate
from ..shared import listenertlssdscertificate as shared_listenertlssdscertificate


@dataclass_json
@dataclasses.dataclass
class ClientTLSCertificate:
    r"""ClientTLSCertificate
    An object that represents the client's certificate.
    """
    
    file: Optional[shared_listenertlsfilecertificate.ListenerTLSFileCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    sds: Optional[shared_listenertlssdscertificate.ListenerTLSSdsCertificate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sds') }})
    
