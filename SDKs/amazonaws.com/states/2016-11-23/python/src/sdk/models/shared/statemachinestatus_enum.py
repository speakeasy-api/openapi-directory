import dataclasses
from enum import Enum

class StateMachineStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

