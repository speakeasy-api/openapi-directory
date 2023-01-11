import dataclasses
from enum import Enum

class DeploymentRolloutStateEnum(str, Enum):
    COMPLETED = "COMPLETED"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"

