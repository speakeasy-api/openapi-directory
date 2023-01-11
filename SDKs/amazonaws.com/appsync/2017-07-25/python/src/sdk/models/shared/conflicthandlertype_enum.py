import dataclasses
from enum import Enum

class ConflictHandlerTypeEnum(str, Enum):
    OPTIMISTIC_CONCURRENCY = "OPTIMISTIC_CONCURRENCY"
    LAMBDA = "LAMBDA"
    AUTOMERGE = "AUTOMERGE"
    NONE = "NONE"

