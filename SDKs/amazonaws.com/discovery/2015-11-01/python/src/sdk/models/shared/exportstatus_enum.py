import dataclasses
from enum import Enum

class ExportStatusEnum(str, Enum):
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    IN_PROGRESS = "IN_PROGRESS"

