import dataclasses
from enum import Enum

class TargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"

