import dataclasses
from enum import Enum

class ReplicationRunTypeEnum(str, Enum):
    ON_DEMAND = "ON_DEMAND"
    AUTOMATIC = "AUTOMATIC"

