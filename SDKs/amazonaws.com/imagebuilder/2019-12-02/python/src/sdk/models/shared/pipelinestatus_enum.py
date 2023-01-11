import dataclasses
from enum import Enum

class PipelineStatusEnum(str, Enum):
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"

