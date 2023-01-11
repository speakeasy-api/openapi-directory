import dataclasses
from enum import Enum

class TransportProtocolEnum(str, Enum):
    TCP = "tcp"
    UDP = "udp"

