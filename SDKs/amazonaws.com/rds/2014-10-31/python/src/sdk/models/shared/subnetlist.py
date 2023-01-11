import dataclasses
from typing import Optional
from ..shared import availabilityzone as shared_availabilityzone
from ..shared import outpost as shared_outpost


@dataclasses.dataclass
class SubnetList:
    r"""SubnetList
     This data type is used as a response element for the <code>DescribeDBSubnetGroups</code> operation. 
    """
    
    subnet_availability_zone: Optional[shared_availabilityzone.AvailabilityZone] = dataclasses.field(default=None)
    subnet_identifier: Optional[str] = dataclasses.field(default=None)
    subnet_outpost: Optional[shared_outpost.Outpost] = dataclasses.field(default=None)
    subnet_status: Optional[str] = dataclasses.field(default=None)
    
