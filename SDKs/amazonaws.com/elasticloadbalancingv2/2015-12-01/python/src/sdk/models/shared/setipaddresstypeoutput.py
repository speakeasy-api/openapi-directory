import dataclasses
from typing import Optional
from enum import Enum
from ..shared import ipaddresstype_enum as shared_ipaddresstype_enum


@dataclasses.dataclass
class SetIPAddressTypeOutput:
    ip_address_type: Optional[shared_ipaddresstype_enum.IPAddressTypeEnum] = dataclasses.field(default=None)
    
