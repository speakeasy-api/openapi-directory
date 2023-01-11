import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accesspolicysummary as shared_accesspolicysummary


@dataclass_json
@dataclasses.dataclass
class ListAccessPoliciesResponse:
    access_policy_summaries: list[shared_accesspolicysummary.AccessPolicySummary] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessPolicySummaries') }})
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
