import dataclasses
from enum import Enum

class ImageTypeEnum(str, Enum):
    OWNED = "OWNED"
    SHARED = "SHARED"

