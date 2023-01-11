import dataclasses
from enum import Enum

class ChronologicalOrderEnum(str, Enum):
    REVERSE = "Reverse"
    FORWARD = "Forward"

