import dataclasses
from enum import Enum

class CloudComponentStateEnum(str, Enum):
    REQUESTED = "REQUESTED"
    INITIATED = "INITIATED"
    DEPLOYABLE = "DEPLOYABLE"
    FAILED = "FAILED"
    DEPRECATED = "DEPRECATED"

