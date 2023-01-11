import dataclasses
from enum import Enum

class ValidationEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

