import dataclasses
from enum import Enum

class ClassStateEnum(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    ARCHIVED = "archived"

