import dataclasses
from enum import Enum

class IPAddressTypeEnum(str, Enum):
    IPV4 = "ipv4"
    DUALSTACK = "dualstack"

