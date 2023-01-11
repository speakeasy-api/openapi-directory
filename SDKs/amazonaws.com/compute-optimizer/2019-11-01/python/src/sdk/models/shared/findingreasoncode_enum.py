import dataclasses
from enum import Enum

class FindingReasonCodeEnum(str, Enum):
    MEMORY_OVERPROVISIONED = "MemoryOverprovisioned"
    MEMORY_UNDERPROVISIONED = "MemoryUnderprovisioned"

