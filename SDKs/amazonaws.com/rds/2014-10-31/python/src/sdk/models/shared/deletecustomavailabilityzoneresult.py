import dataclasses
from typing import Optional
from ..shared import customavailabilityzone as shared_customavailabilityzone


@dataclasses.dataclass
class DeleteCustomAvailabilityZoneResult:
    custom_availability_zone: Optional[shared_customavailabilityzone.CustomAvailabilityZone] = dataclasses.field(default=None)
    
