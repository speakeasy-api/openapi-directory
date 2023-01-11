import dataclasses
from enum import Enum

class CustomRoutingProtocolEnum(str, Enum):
    TCP = "TCP"
    UDP = "UDP"

