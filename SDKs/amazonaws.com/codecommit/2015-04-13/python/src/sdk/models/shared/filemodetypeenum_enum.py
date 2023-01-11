import dataclasses
from enum import Enum

class FileModeTypeEnumEnum(str, Enum):
    EXECUTABLE = "EXECUTABLE"
    NORMAL = "NORMAL"
    SYMLINK = "SYMLINK"

