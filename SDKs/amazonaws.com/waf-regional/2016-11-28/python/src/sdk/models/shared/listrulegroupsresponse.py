import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulegroupsummary as shared_rulegroupsummary


@dataclass_json
@dataclasses.dataclass
class ListRuleGroupsResponse:
    next_marker: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    rule_groups: Optional[list[shared_rulegroupsummary.RuleGroupSummary]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroups') }})
    
