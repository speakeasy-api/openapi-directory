import dataclasses
from enum import Enum

class CapacityTypesEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    SPOT = "SPOT"

