import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rulegrouptype_enum as shared_rulegrouptype_enum


@dataclass_json
@dataclasses.dataclass
class DescribeRuleGroupRequest:
    rule_group_arn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupArn') }})
    rule_group_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupName') }})
    type: Optional[shared_rulegrouptype_enum.RuleGroupTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
