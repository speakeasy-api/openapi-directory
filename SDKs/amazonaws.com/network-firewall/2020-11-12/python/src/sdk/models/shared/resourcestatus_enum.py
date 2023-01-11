import dataclasses
from enum import Enum

class ResourceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

