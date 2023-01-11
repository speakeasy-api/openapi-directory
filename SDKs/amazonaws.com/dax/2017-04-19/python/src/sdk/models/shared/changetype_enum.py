import dataclasses
from enum import Enum

class ChangeTypeEnum(str, Enum):
    IMMEDIATE = "IMMEDIATE"
    REQUIRES_REBOOT = "REQUIRES_REBOOT"

