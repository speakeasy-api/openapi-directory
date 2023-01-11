import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorcheckdescription as shared_trustedadvisorcheckdescription


@dataclass_json
@dataclasses.dataclass
class DescribeTrustedAdvisorChecksResponse:
    r"""DescribeTrustedAdvisorChecksResponse
    Information about the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorChecks</a> operation.
    """
    
    checks: list[shared_trustedadvisorcheckdescription.TrustedAdvisorCheckDescription] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checks') }})
    
