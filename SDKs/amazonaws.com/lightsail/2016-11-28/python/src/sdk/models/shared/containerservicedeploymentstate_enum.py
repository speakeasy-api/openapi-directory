import dataclasses
from enum import Enum

class ContainerServiceDeploymentStateEnum(str, Enum):
    ACTIVATING = "ACTIVATING"
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    FAILED = "FAILED"

