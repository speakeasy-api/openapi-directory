import dataclasses
from enum import Enum

class IPAddressAssignmentEnum(str, Enum):
    DHCP = "DHCP"
    STATIC = "STATIC"

