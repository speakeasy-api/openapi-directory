import dataclasses
from enum import Enum

class ConflictDetailLevelTypeEnumEnum(str, Enum):
    FILE_LEVEL = "FILE_LEVEL"
    LINE_LEVEL = "LINE_LEVEL"

