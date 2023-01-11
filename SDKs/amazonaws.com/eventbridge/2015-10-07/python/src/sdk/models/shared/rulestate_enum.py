import dataclasses
from enum import Enum

class RuleStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

