import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorcheckrefreshstatus as shared_trustedadvisorcheckrefreshstatus


@dataclass_json
@dataclasses.dataclass
class DescribeTrustedAdvisorCheckRefreshStatusesResponse:
    r"""DescribeTrustedAdvisorCheckRefreshStatusesResponse
    The statuses of the Trusted Advisor checks returned by the <a>DescribeTrustedAdvisorCheckRefreshStatuses</a> operation.
    """
    
    statuses: list[shared_trustedadvisorcheckrefreshstatus.TrustedAdvisorCheckRefreshStatus] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    
