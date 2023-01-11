import dataclasses
from enum import Enum

class StateEnum(str, Enum):
    PENDING = "Pending"
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    FAILED = "Failed"

