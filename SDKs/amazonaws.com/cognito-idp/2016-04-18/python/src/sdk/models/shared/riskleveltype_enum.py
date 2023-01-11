import dataclasses
from enum import Enum

class RiskLevelTypeEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

