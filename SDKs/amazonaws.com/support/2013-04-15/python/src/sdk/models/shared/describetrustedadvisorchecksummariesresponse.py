import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorchecksummary as shared_trustedadvisorchecksummary


@dataclass_json
@dataclasses.dataclass
class DescribeTrustedAdvisorCheckSummariesResponse:
    r"""DescribeTrustedAdvisorCheckSummariesResponse
    The summaries of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckSummaries</a> operation.
    """
    
    summaries: list[shared_trustedadvisorchecksummary.TrustedAdvisorCheckSummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('summaries') }})
    
