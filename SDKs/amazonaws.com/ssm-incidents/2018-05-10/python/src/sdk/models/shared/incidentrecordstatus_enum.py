import dataclasses
from enum import Enum

class IncidentRecordStatusEnum(str, Enum):
    OPEN = "OPEN"
    RESOLVED = "RESOLVED"

