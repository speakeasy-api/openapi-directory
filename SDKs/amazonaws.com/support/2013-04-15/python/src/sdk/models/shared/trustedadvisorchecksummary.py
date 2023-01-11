import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import trustedadvisorcategoryspecificsummary as shared_trustedadvisorcategoryspecificsummary
from ..shared import trustedadvisorresourcessummary as shared_trustedadvisorresourcessummary


@dataclass_json
@dataclasses.dataclass
class TrustedAdvisorCheckSummary:
    r"""TrustedAdvisorCheckSummary
    A summary of a Trusted Advisor check result, including the alert status, last refresh, and number of resources examined.
    """
    
    category_specific_summary: shared_trustedadvisorcategoryspecificsummary.TrustedAdvisorCategorySpecificSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categorySpecificSummary') }})
    check_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('checkId') }})
    resources_summary: shared_trustedadvisorresourcessummary.TrustedAdvisorResourcesSummary = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesSummary') }})
    status: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    timestamp: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    has_flagged_resources: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasFlaggedResources') }})
    
