import dataclasses
from enum import Enum

class TransformStatusTypeEnum(str, Enum):
    NOT_READY = "NOT_READY"
    READY = "READY"
    DELETING = "DELETING"

