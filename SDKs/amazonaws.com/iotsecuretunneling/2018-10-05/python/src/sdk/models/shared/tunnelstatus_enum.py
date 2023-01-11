import dataclasses
from enum import Enum

class TunnelStatusEnum(str, Enum):
    OPEN = "OPEN"
    CLOSED = "CLOSED"

