import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subnetmapping as shared_subnetmapping
from ..shared import tag as shared_tag


@dataclass_json
@dataclasses.dataclass
class CreateFirewallRequest:
    firewall_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallName') }})
    firewall_policy_arn: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyArn') }})
    subnet_mappings: list[shared_subnetmapping.SubnetMapping] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetMappings') }})
    vpc_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    delete_protection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteProtection') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    firewall_policy_change_protection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirewallPolicyChangeProtection') }})
    subnet_change_protection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetChangeProtection') }})
    tags: Optional[list[shared_tag.Tag]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
