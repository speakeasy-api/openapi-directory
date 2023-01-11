import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorcheckrefreshstatus as shared_trustedadvisorcheckrefreshstatus


@dataclass_json
@dataclasses.dataclass
class RefreshTrustedAdvisorCheckResponse:
    r"""RefreshTrustedAdvisorCheckResponse
    The current refresh status of a Trusted Advisor check.
    """
    
    status: shared_trustedadvisorcheckrefreshstatus.TrustedAdvisorCheckRefreshStatus = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
