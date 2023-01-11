import dataclasses
from enum import Enum

class StageTransitionTypeEnum(str, Enum):
    INBOUND = "Inbound"
    OUTBOUND = "Outbound"

