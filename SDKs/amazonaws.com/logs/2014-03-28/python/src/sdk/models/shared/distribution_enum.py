import dataclasses
from enum import Enum

class DistributionEnum(str, Enum):
    RANDOM = "Random"
    BY_LOG_STREAM = "ByLogStream"

