import dataclasses
from enum import Enum

class ReplacementEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"

