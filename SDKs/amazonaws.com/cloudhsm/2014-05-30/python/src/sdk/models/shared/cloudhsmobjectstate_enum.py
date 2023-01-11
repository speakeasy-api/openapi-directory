import dataclasses
from enum import Enum

class CloudHsmObjectStateEnum(str, Enum):
    READY = "READY"
    UPDATING = "UPDATING"
    DEGRADED = "DEGRADED"

