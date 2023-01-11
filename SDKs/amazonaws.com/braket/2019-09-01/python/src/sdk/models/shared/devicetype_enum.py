import dataclasses
from enum import Enum

class DeviceTypeEnum(str, Enum):
    QPU = "QPU"
    SIMULATOR = "SIMULATOR"

