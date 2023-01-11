import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulegroup as shared_rulegroup
from ..shared import tag as shared_tag
from ..shared import rulegrouptype_enum as shared_rulegrouptype_enum


@dataclass_json
@dataclasses.dataclass
class CreateRuleGroupRequest:
    capacity: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capacity') }})
    rule_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupName') }})
    type: shared_rulegrouptype_enum.RuleGroupTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    dry_run: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DryRun') }})
    rule_group: Optional[shared_rulegroup.RuleGroup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroup') }})
    rules: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
