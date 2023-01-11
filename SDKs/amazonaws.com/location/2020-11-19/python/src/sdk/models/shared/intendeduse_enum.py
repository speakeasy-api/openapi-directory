import dataclasses
from enum import Enum

class IntendedUseEnum(str, Enum):
    SINGLE_USE = "SingleUse"
    STORAGE = "Storage"

