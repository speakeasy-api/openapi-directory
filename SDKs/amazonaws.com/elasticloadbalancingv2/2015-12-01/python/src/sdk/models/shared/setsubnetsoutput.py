import dataclasses
from typing import Optional
from enum import Enum
from ..shared import availabilityzone as shared_availabilityzone
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum


@dataclasses.dataclass
class SetSubnetsOutput:
    availability_zones: Optional[list[shared_availabilityzone.AvailabilityZone]] = dataclasses.field(default=None)
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None)
    
