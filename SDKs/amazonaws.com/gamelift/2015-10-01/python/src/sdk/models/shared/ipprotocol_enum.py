import dataclasses
from enum import Enum

class IPProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"

