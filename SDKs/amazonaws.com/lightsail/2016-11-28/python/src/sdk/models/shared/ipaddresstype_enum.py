import dataclasses
from enum import Enum

class IPAddressTypeEnum(str, Enum):
    DUALSTACK = "dualstack"
    IPV4 = "ipv4"

