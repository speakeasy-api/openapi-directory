import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import partialmatch as shared_partialmatch
from ..shared import securitygroupremediationaction as shared_securitygroupremediationaction


@dataclass_json
@dataclasses.dataclass
class AwsVpcSecurityGroupViolation:
    r"""AwsVpcSecurityGroupViolation
    Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
    """
    
    partial_matches: Optional[list[shared_partialmatch.PartialMatch]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartialMatches') }})
    possible_security_group_remediation_actions: Optional[list[shared_securitygroupremediationaction.SecurityGroupRemediationAction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PossibleSecurityGroupRemediationActions') }})
    violation_target: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    violation_target_description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTargetDescription') }})
    
