import dataclasses
from enum import Enum

class ChangeTypeEnum(str, Enum):
    IMMEDIATE = "immediate"
    REQUIRES_REBOOT = "requires-reboot"

