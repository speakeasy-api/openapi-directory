import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcestatus_enum as shared_resourcestatus_enum
from ..shared import tag as shared_tag
from ..shared import rulegrouptype_enum as shared_rulegrouptype_enum


@dataclass_json
@dataclasses.dataclass
class RuleGroupResponse:
    r"""RuleGroupResponse
    The high-level properties of a rule group. This, along with the <a>RuleGroup</a>, define the rule group. You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>. 
    """
    
    rule_group_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupArn') }})
    rule_group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupId') }})
    rule_group_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupName') }})
    capacity: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Capacity') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    rule_group_status: Optional[shared_resourcestatus_enum.ResourceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleGroupStatus') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    type: Optional[shared_rulegrouptype_enum.RuleGroupTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
