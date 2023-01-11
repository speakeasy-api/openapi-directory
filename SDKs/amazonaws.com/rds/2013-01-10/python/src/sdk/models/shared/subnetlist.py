import dataclasses
from typing import Optional
from ..shared import availabilityzone as shared_availabilityzone


@dataclasses.dataclass
class SubnetList:
    subnet_availability_zone: Optional[shared_availabilityzone.AvailabilityZone] = dataclasses.field(default=None)
    subnet_identifier: Optional[str] = dataclasses.field(default=None)
    subnet_status: Optional[str] = dataclasses.field(default=None)
    
