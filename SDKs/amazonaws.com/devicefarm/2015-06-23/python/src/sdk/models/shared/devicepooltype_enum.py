import dataclasses
from enum import Enum

class DevicePoolTypeEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

