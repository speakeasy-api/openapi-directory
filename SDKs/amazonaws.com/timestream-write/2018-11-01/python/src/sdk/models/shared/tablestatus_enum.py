import dataclasses
from enum import Enum

class TableStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

