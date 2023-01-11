import dataclasses
from enum import Enum

class TaskDefinitionStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

