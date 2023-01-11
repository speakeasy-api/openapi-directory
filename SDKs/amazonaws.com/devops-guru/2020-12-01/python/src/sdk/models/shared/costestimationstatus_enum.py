import dataclasses
from enum import Enum

class CostEstimationStatusEnum(str, Enum):
    ONGOING = "ONGOING"
    COMPLETED = "COMPLETED"

