import dataclasses
from enum import Enum

class ColumnMappingStatusEnum(str, Enum):
    WARNING = "warning"
    SUCCESS = "success"
    FAILED = "failed"

