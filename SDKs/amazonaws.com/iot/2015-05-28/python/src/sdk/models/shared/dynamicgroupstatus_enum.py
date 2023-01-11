import dataclasses
from enum import Enum

class DynamicGroupStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    BUILDING = "BUILDING"
    REBUILDING = "REBUILDING"

