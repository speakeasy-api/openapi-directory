import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourcestatus_enum as shared_resourcestatus_enum
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class FirewallPolicyResponse:
    r"""FirewallPolicyResponse
    The high-level properties of a firewall policy. This, along with the <a>FirewallPolicy</a>, define the policy. You can retrieve all objects for a firewall policy by calling <a>DescribeFirewallPolicy</a>. 
    """
    
    firewall_policy_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyArn') }})
    firewall_policy_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyId') }})
    firewall_policy_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyName') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    firewall_policy_status: Optional[shared_resourcestatus_enum.ResourceStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyStatus') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
