import dataclasses
from enum import Enum

class MapFilterComparisonEnum(str, Enum):
    EQUALS = "EQUALS"
    NOT_EQUALS = "NOT_EQUALS"

