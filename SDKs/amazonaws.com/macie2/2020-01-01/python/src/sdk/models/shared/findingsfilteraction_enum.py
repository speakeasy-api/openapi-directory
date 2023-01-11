import dataclasses
from enum import Enum

class FindingsFilterActionEnum(str, Enum):
    ARCHIVE = "ARCHIVE"
    NOOP = "NOOP"

