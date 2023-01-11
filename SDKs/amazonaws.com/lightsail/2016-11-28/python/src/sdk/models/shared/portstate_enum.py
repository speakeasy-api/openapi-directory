import dataclasses
from enum import Enum

class PortStateEnum(str, Enum):
    OPEN = "open"
    CLOSED = "closed"

