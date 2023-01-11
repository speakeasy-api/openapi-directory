import dataclasses
from enum import Enum

class VisibilityTypeEnum(str, Enum):
    PUBLIC = "PUBLIC"
    PRIVATE = "PRIVATE"
    SHARED = "SHARED"

