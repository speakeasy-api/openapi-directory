import dataclasses
from enum import Enum

class FilterTypeEnum(str, Enum):
    FLOW = "FLOW"
    PACKET = "PACKET"

