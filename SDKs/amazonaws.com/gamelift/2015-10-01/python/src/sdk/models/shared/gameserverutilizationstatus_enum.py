import dataclasses
from enum import Enum

class GameServerUtilizationStatusEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    UTILIZED = "UTILIZED"

