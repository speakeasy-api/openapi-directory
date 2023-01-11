import dataclasses
from enum import Enum

class DeviceRememberedStatusTypeEnum(str, Enum):
    REMEMBERED = "remembered"
    NOT_REMEMBERED = "not_remembered"

