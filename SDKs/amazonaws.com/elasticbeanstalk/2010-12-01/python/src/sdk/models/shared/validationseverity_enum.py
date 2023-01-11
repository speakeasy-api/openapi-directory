import dataclasses
from enum import Enum

class ValidationSeverityEnum(str, Enum):
    ERROR = "error"
    WARNING = "warning"

