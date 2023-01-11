import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import availabilityzone as shared_availabilityzone


@dataclass_json
@dataclasses.dataclass
class Subnet:
    r"""Subnet
    Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with MemoryDB.
    """
    
    availability_zone: Optional[shared_availabilityzone.AvailabilityZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    identifier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    
