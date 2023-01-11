import dataclasses
from enum import Enum

class RuleTypeOptionEnum(str, Enum):
    FORWARD = "FORWARD"
    SYSTEM = "SYSTEM"
    RECURSIVE = "RECURSIVE"

