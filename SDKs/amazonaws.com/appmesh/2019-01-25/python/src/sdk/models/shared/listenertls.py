import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listenertlscertificate as shared_listenertlscertificate
from ..shared import listenertlsmode_enum as shared_listenertlsmode_enum
from ..shared import listenertlsvalidationcontext as shared_listenertlsvalidationcontext


@dataclass_json
@dataclasses.dataclass
class ListenerTLS:
    r"""ListenerTLS
    An object that represents the Transport Layer Security (TLS) properties for a listener.
    """
    
    certificate: shared_listenertlscertificate.ListenerTLSCertificate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    mode: shared_listenertlsmode_enum.ListenerTLSModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    validation: Optional[shared_listenertlsvalidationcontext.ListenerTLSValidationContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    
