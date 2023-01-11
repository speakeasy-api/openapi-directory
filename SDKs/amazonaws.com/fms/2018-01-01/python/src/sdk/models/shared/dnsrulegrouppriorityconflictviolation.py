import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DNSRuleGroupPriorityConflictViolation:
    r"""DNSRuleGroupPriorityConflictViolation
    A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated. 
    """
    
    conflicting_policy_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictingPolicyId') }})
    conflicting_priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictingPriority') }})
    unavailable_priorities: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnavailablePriorities') }})
    violation_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    violation_target_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTargetDescription') }})
    
