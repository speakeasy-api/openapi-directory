import dataclasses
from enum import Enum

class QualityEnum(str, Enum):
    GOOD = "GOOD"
    BAD = "BAD"
    UNCERTAIN = "UNCERTAIN"

