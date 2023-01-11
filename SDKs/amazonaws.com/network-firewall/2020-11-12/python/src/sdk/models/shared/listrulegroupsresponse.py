import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulegroupmetadata as shared_rulegroupmetadata


@dataclass_json
@dataclasses.dataclass
class ListRuleGroupsResponse:
    next_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    rule_groups: Optional[list[shared_rulegroupmetadata.RuleGroupMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroups') }})
    
