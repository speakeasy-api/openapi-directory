import dataclasses
from enum import Enum

class FleetTypeEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    SPOT = "SPOT"

