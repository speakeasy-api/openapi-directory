import dataclasses
from enum import Enum

class AcceleratorStatusEnum(str, Enum):
    DEPLOYED = "DEPLOYED"
    IN_PROGRESS = "IN_PROGRESS"

