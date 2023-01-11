import dataclasses
from enum import Enum

class ScopeEnum(str, Enum):
    TASK = "task"
    SHARED = "shared"

