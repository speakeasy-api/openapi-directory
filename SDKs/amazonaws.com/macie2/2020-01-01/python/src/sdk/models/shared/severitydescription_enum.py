import dataclasses
from enum import Enum

class SeverityDescriptionEnum(str, Enum):
    LOW = "Low"
    MEDIUM = "Medium"
    HIGH = "High"

