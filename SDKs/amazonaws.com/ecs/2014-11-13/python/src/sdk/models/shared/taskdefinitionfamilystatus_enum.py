import dataclasses
from enum import Enum

class TaskDefinitionFamilyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    ALL = "ALL"

