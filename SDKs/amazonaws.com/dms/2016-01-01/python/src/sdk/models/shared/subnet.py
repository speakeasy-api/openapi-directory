import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import availabilityzone as shared_availabilityzone


@dataclass_json
@dataclasses.dataclass
class Subnet:
    r"""Subnet
    In response to a request by the <code>DescribeReplicationSubnetGroups</code> operation, this object identifies a subnet by its given Availability Zone, subnet identifier, and status.
    """
    
    subnet_availability_zone: Optional[shared_availabilityzone.AvailabilityZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetAvailabilityZone') }})
    subnet_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIdentifier') }})
    subnet_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetStatus') }})
    
