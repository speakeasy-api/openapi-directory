import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class VerifyTrustRequest:
    r"""VerifyTrustRequest
    Initiates the verification of an existing trust relationship between an Managed Microsoft AD directory and an external domain.
    """
    
    trust_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrustId') }})
    
