import dataclasses
from enum import Enum

class FindingChangeTypeEnum(str, Enum):
    CHANGED = "CHANGED"
    NEW = "NEW"
    UNCHANGED = "UNCHANGED"

