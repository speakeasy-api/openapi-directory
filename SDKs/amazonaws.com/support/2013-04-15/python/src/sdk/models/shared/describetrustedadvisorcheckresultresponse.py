import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorcheckresult as shared_trustedadvisorcheckresult


@dataclass_json
@dataclasses.dataclass
class DescribeTrustedAdvisorCheckResultResponse:
    r"""DescribeTrustedAdvisorCheckResultResponse
    The result of the Trusted Advisor check returned by the <a>DescribeTrustedAdvisorCheckResult</a> operation.
    """
    
    result: Optional[shared_trustedadvisorcheckresult.TrustedAdvisorCheckResult] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
