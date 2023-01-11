import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import kyccheck as shared_kyccheck


@dataclass_json
@dataclasses.dataclass
class KycResponse:
    r"""KycResponse
    This is the base response type of the getKYC method.
    """
    
    kyc_checks: Optional[list[shared_kyccheck.KycCheck]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kycChecks') }})
    
