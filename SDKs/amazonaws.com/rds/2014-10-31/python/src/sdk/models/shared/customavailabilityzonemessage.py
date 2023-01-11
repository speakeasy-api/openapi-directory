import dataclasses
from typing import Optional
from ..shared import customavailabilityzonelist as shared_customavailabilityzonelist


@dataclasses.dataclass
class CustomAvailabilityZoneMessage:
    custom_availability_zones: Optional[list[shared_customavailabilityzonelist.CustomAvailabilityZoneList]] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
