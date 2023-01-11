import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorcategoryspecificsummary as shared_trustedadvisorcategoryspecificsummary
from ..shared import trustedadvisorresourcedetail as shared_trustedadvisorresourcedetail
from ..shared import trustedadvisorresourcessummary as shared_trustedadvisorresourcessummary


@dataclass_json
@dataclasses.dataclass
class TrustedAdvisorCheckResult:
    r"""TrustedAdvisorCheckResult
    The results of a Trusted Advisor check returned by <a>DescribeTrustedAdvisorCheckResult</a>.
    """
    
    category_specific_summary: shared_trustedadvisorcategoryspecificsummary.TrustedAdvisorCategorySpecificSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorySpecificSummary') }})
    check_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    flagged_resources: list[shared_trustedadvisorresourcedetail.TrustedAdvisorResourceDetail] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flaggedResources') }})
    resources_summary: shared_trustedadvisorresourcessummary.TrustedAdvisorResourcesSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesSummary') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
