import dataclasses
from enum import Enum

class ResourceIDTypeEnum(str, Enum):
    LONG_ID = "LONG_ID"
    SHORT_ID = "SHORT_ID"

