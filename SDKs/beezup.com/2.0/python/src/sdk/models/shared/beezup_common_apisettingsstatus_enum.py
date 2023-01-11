import dataclasses
from enum import Enum

class BeezUpCommonAPISettingsStatusEnum(str, Enum):
    WARNING = "warning"
    SUCCESS = "success"
    FAILED = "failed"

