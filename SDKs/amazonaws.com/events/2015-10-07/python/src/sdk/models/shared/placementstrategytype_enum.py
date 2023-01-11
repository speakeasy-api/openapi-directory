import dataclasses
from enum import Enum

class PlacementStrategyTypeEnum(str, Enum):
    RANDOM = "random"
    SPREAD = "spread"
    BINPACK = "binpack"

