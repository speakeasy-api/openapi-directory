import dataclasses
from enum import Enum

class AlgorithmicStemmingEnum(str, Enum):
    NONE = "none"
    MINIMAL = "minimal"
    LIGHT = "light"
    FULL = "full"

