import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubnetMapping:
    r"""SubnetMapping
    The ID for a subnet that you want to associate with the firewall. This is used with <a>CreateFirewall</a> and <a>AssociateSubnets</a>. AWS Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
    """
    
    subnet_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    
