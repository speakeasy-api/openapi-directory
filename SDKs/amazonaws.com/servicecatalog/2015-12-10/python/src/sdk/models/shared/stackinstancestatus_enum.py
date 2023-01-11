import dataclasses
from enum import Enum

class StackInstanceStatusEnum(str, Enum):
    CURRENT = "CURRENT"
    OUTDATED = "OUTDATED"
    INOPERABLE = "INOPERABLE"

