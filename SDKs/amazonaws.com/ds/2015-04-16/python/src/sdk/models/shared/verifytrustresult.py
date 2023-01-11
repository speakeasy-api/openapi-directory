import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VerifyTrustResult:
    r"""VerifyTrustResult
    Result of a VerifyTrust request.
    """
    
    trust_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustId') }})
    
