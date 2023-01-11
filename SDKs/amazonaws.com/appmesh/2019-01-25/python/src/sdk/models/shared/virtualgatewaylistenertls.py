import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import virtualgatewaylistenertlscertificate as shared_virtualgatewaylistenertlscertificate
from ..shared import virtualgatewaylistenertlsmode_enum as shared_virtualgatewaylistenertlsmode_enum
from ..shared import virtualgatewaylistenertlsvalidationcontext as shared_virtualgatewaylistenertlsvalidationcontext


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayListenerTLS:
    r"""VirtualGatewayListenerTLS
    An object that represents the Transport Layer Security (TLS) properties for a listener.
    """
    
    certificate: shared_virtualgatewaylistenertlscertificate.VirtualGatewayListenerTLSCertificate = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    mode: shared_virtualgatewaylistenertlsmode_enum.VirtualGatewayListenerTLSModeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    validation: Optional[shared_virtualgatewaylistenertlsvalidationcontext.VirtualGatewayListenerTLSValidationContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validation') }})
    
