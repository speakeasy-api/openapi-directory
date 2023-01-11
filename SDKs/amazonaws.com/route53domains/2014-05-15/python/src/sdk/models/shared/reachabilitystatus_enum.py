import dataclasses
from enum import Enum

class ReachabilityStatusEnum(str, Enum):
    PENDING = "PENDING"
    DONE = "DONE"
    EXPIRED = "EXPIRED"

