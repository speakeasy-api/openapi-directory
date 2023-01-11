import dataclasses
from enum import Enum

class QualityFilterEnum(str, Enum):
    NONE = "NONE"
    AUTO = "AUTO"
    LOW = "LOW"
    MEDIUM = "MEDIUM"
    HIGH = "HIGH"

