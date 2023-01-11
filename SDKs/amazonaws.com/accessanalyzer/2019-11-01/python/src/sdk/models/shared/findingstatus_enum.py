import dataclasses
from enum import Enum

class FindingStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"
    RESOLVED = "RESOLVED"

