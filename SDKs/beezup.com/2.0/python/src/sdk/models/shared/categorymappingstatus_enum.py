import dataclasses
from enum import Enum

class CategoryMappingStatusEnum(str, Enum):
    WARNING = "warning"
    SUCCESS = "success"
    FAILED = "failed"

