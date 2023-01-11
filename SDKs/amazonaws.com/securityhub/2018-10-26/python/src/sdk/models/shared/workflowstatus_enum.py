import dataclasses
from enum import Enum

class WorkflowStatusEnum(str, Enum):
    NEW = "NEW"
    NOTIFIED = "NOTIFIED"
    RESOLVED = "RESOLVED"
    SUPPRESSED = "SUPPRESSED"

