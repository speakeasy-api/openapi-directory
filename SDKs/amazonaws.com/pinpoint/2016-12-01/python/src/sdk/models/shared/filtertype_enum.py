import dataclasses
from enum import Enum

class FilterTypeEnum(str, Enum):
    SYSTEM = "SYSTEM"
    ENDPOINT = "ENDPOINT"

