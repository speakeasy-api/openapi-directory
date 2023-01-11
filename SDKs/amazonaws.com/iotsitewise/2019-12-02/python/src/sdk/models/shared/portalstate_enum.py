import dataclasses
from enum import Enum

class PortalStateEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"

