import dataclasses
from enum import Enum

class ComputeLocationEnum(str, Enum):
    EDGE = "EDGE"
    CLOUD = "CLOUD"

