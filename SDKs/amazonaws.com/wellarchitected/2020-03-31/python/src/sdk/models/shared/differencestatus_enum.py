import dataclasses
from enum import Enum

class DifferenceStatusEnum(str, Enum):
    UPDATED = "UPDATED"
    NEW = "NEW"
    DELETED = "DELETED"

