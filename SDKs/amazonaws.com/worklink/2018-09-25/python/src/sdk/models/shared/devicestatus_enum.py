import dataclasses
from enum import Enum

class DeviceStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    SIGNED_OUT = "SIGNED_OUT"

