import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TrustedAdvisorResourcesSummary:
    r"""TrustedAdvisorResourcesSummary
    Details about AWS resources that were analyzed in a call to Trusted Advisor <a>DescribeTrustedAdvisorCheckSummaries</a>.
    """
    
    resources_flagged: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesFlagged') }})
    resources_ignored: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesIgnored') }})
    resources_processed: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesProcessed') }})
    resources_suppressed: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourcesSuppressed') }})
    
