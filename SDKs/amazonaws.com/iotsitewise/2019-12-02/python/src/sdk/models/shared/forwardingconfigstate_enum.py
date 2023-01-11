import dataclasses
from enum import Enum

class ForwardingConfigStateEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"

