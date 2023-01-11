import dataclasses
from enum import Enum

class CustomRoutingAcceleratorStatusEnum(str, Enum):
    DEPLOYED = "DEPLOYED"
    IN_PROGRESS = "IN_PROGRESS"

