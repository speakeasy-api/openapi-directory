import dataclasses
from enum import Enum

class PriorityTypeEnum(str, Enum):
    LATENCY = "LATENCY"
    COST = "COST"
    DESTINATION = "DESTINATION"
    LOCATION = "LOCATION"

