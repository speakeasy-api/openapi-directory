import dataclasses
from enum import Enum

class BlueprintStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    FAILED = "FAILED"

