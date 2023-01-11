import dataclasses
from enum import Enum

class VocabularyStateEnum(str, Enum):
    PENDING = "PENDING"
    READY = "READY"
    FAILED = "FAILED"

