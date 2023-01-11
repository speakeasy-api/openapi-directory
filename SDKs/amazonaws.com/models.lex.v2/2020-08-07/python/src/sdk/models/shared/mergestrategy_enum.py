import dataclasses
from enum import Enum

class MergeStrategyEnum(str, Enum):
    OVERWRITE = "Overwrite"
    FAIL_ON_CONFLICT = "FailOnConflict"

