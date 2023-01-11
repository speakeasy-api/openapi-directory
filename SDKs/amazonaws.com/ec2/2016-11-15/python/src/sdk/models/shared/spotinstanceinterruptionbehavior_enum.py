import dataclasses
from enum import Enum

class SpotInstanceInterruptionBehaviorEnum(str, Enum):
    HIBERNATE = "hibernate"
    STOP = "stop"
    TERMINATE = "terminate"

