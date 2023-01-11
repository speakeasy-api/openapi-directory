import dataclasses
from enum import Enum

class SessionStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"
    EXPIRED = "EXPIRED"

