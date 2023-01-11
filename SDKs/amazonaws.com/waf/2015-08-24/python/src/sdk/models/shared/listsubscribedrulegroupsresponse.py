import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscribedrulegroupsummary as shared_subscribedrulegroupsummary


@dataclass_json
@dataclasses.dataclass
class ListSubscribedRuleGroupsResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    rule_groups: Optional[list[shared_subscribedrulegroupsummary.SubscribedRuleGroupSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroups') }})
    
