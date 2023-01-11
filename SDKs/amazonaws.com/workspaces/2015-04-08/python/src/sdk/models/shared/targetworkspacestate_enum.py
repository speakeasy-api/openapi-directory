import dataclasses
from enum import Enum

class TargetWorkspaceStateEnum(str, Enum):
    AVAILABLE = "AVAILABLE"
    ADMIN_MAINTENANCE = "ADMIN_MAINTENANCE"

