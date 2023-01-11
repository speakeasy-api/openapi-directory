import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subjectalternativenames as shared_subjectalternativenames
from ..shared import virtualgatewaylistenertlsvalidationcontexttrust as shared_virtualgatewaylistenertlsvalidationcontexttrust


@dataclass_json
@dataclasses.dataclass
class VirtualGatewayListenerTLSValidationContext:
    r"""VirtualGatewayListenerTLSValidationContext
    An object that represents a virtual gateway's listener's Transport Layer Security (TLS) validation context.
    """
    
    trust: shared_virtualgatewaylistenertlsvalidationcontexttrust.VirtualGatewayListenerTLSValidationContextTrust = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust') }})
    subject_alternative_names: Optional[shared_subjectalternativenames.SubjectAlternativeNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAlternativeNames') }})
    
