import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subjectalternativenames as shared_subjectalternativenames
from ..shared import tlsvalidationcontexttrust as shared_tlsvalidationcontexttrust


@dataclass_json
@dataclasses.dataclass
class TLSValidationContext:
    r"""TLSValidationContext
    An object that represents how the proxy will validate its peer during Transport Layer Security (TLS) negotiation.
    """
    
    trust: shared_tlsvalidationcontexttrust.TLSValidationContextTrust = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('trust') }})
    subject_alternative_names: Optional[shared_subjectalternativenames.SubjectAlternativeNames] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subjectAlternativeNames') }})
    
