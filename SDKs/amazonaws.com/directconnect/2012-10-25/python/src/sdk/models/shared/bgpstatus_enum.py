import dataclasses
from enum import Enum

class BgpStatusEnum(str, Enum):
    UP = "up"
    DOWN = "down"
    UNKNOWN = "unknown"

