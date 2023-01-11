import dataclasses
from enum import Enum

class EventSourceStateEnum(str, Enum):
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"

