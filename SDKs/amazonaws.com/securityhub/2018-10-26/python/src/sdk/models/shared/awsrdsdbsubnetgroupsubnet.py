import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import awsrdsdbsubnetgroupsubnetavailabilityzone as shared_awsrdsdbsubnetgroupsubnetavailabilityzone


@dataclass_json
@dataclasses.dataclass
class AwsRdsDbSubnetGroupSubnet:
    r"""AwsRdsDbSubnetGroupSubnet
    Information about a subnet in a subnet group.
    """
    
    subnet_availability_zone: Optional[shared_awsrdsdbsubnetgroupsubnetavailabilityzone.AwsRdsDbSubnetGroupSubnetAvailabilityZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetAvailabilityZone') }})
    subnet_identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIdentifier') }})
    subnet_status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetStatus') }})
    
