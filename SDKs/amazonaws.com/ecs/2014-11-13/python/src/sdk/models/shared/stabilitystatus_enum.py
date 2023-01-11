import dataclasses
from enum import Enum

class StabilityStatusEnum(str, Enum):
    STEADY_STATE = "STEADY_STATE"
    STABILIZING = "STABILIZING"

