import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import icmptypecode as shared_icmptypecode
from ..shared import portrangefromto as shared_portrangefromto


@dataclass_json
@dataclasses.dataclass
class AwsEc2NetworkACLEntry:
    r"""AwsEc2NetworkACLEntry
    A rule for the network ACL. Each rule allows or denies access based on the IP address, traffic direction, port, and protocol.
    """
    
    cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrBlock') }})
    egress: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Egress') }})
    icmp_type_code: Optional[shared_icmptypecode.IcmpTypeCode] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IcmpTypeCode') }})
    ipv6_cidr_block: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ipv6CidrBlock') }})
    port_range: Optional[shared_portrangefromto.PortRangeFromTo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PortRange') }})
    protocol: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    rule_action: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleAction') }})
    rule_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleNumber') }})
    
