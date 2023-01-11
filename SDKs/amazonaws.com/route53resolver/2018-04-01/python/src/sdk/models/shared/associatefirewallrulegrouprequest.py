import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import mutationprotectionstatus_enum as shared_mutationprotectionstatus_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class AssociateFirewallRuleGroupRequest:
    creator_request_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatorRequestId') }})
    firewall_rule_group_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallRuleGroupId') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    priority: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    mutation_protection: Optional[shared_mutationprotectionstatus_enum.MutationProtectionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MutationProtection') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
