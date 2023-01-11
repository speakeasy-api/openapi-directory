import dataclasses
from enum import Enum

class DeviceStatusEnum(str, Enum):
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"
    RETIRED = "RETIRED"

