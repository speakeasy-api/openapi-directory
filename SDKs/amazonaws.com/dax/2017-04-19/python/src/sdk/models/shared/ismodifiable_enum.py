import dataclasses
from enum import Enum

class IsModifiableEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"

