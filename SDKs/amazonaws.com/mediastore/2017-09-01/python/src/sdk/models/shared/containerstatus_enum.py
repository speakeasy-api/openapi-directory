import dataclasses
from enum import Enum

class ContainerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    CREATING = "CREATING"
    DELETING = "DELETING"

