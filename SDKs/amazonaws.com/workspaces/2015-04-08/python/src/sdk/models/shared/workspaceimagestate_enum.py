import dataclasses
from enum import Enum

class WorkspaceImageStateEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    PENDING = "PENDING"
    ERROR = "ERROR"

