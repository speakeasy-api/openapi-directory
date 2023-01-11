import dataclasses
from enum import Enum

class APIDestinationStateEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

