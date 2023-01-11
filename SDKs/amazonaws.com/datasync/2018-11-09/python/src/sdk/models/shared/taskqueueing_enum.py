import dataclasses
from enum import Enum

class TaskQueueingEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

