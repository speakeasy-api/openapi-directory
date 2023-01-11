import dataclasses
from enum import Enum

class PortAccessTypeEnum(str, Enum):
    PUBLIC = "Public"
    PRIVATE = "Private"

