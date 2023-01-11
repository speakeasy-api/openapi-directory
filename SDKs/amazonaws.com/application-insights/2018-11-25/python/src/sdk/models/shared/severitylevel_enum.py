import dataclasses
from enum import Enum

class SeverityLevelEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

