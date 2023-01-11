import dataclasses
from enum import Enum

class PerformanceModeEnum(str, Enum):
    GENERAL_PURPOSE = "generalPurpose"
    MAX_IO = "maxIO"

