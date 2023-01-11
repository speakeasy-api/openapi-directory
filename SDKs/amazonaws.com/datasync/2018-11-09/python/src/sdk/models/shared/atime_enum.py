import dataclasses
from enum import Enum

class AtimeEnum(str, Enum):
    NONE = "NONE"
    BEST_EFFORT = "BEST_EFFORT"

