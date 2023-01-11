import dataclasses
from enum import Enum

class ThroughputModeEnum(str, Enum):
    BURSTING = "bursting"
    PROVISIONED = "provisioned"

