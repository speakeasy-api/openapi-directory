import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subjectalternativenames as shared_subjectalternativenames
from ..shared import listenertlsvalidationcontexttrust as shared_listenertlsvalidationcontexttrust


@dataclass_json
@dataclasses.dataclass
class ListenerTLSValidationContext:
    r"""ListenerTLSValidationContext
    An object that represents a listener's Transport Layer Security (TLS) validation context.
    """
    
    trust: shared_listenertlsvalidationcontexttrust.ListenerTLSValidationContextTrust = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust') }})
    subject_alternative_names: Optional[shared_subjectalternativenames.SubjectAlternativeNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAlternativeNames') }})
    
