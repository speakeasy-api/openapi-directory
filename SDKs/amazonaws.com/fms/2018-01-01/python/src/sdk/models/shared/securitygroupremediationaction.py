import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import remediationactiontype_enum as shared_remediationactiontype_enum
from ..shared import securitygroupruledescription as shared_securitygroupruledescription


@dataclass_json
@dataclasses.dataclass
class SecurityGroupRemediationAction:
    r"""SecurityGroupRemediationAction
    Remediation option for the rule specified in the <code>ViolationTarget</code>.
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_default_action: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDefaultAction') }})
    remediation_action_type: Optional[shared_remediationactiontype_enum.RemediationActionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationActionType') }})
    remediation_result: Optional[shared_securitygroupruledescription.SecurityGroupRuleDescription] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationResult') }})
    
