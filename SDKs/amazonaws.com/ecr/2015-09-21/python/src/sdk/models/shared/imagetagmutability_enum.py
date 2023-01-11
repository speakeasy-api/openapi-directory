import dataclasses
from enum import Enum

class ImageTagMutabilityEnum(str, Enum):
    MUTABLE = "MUTABLE"
    IMMUTABLE = "IMMUTABLE"

