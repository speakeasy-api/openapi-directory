import dataclasses
from typing import Optional
from ..shared import availabilityzone as shared_availabilityzone
from ..shared import subnetoutpost as shared_subnetoutpost


@dataclasses.dataclass
class SubnetList:
    r"""SubnetList
    Represents the subnet associated with a cluster. This parameter refers to subnets defined in Amazon Virtual Private Cloud (Amazon VPC) and used with ElastiCache.
    """
    
    subnet_availability_zone: Optional[shared_availabilityzone.AvailabilityZone] = dataclasses.field(default=None)
    subnet_identifier: Optional[str] = dataclasses.field(default=None)
    subnet_outpost: Optional[shared_subnetoutpost.SubnetOutpost] = dataclasses.field(default=None)
    
