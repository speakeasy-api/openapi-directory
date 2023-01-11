import dataclasses
from enum import Enum

class WorkspaceDirectoryStateEnum(str, Enum):
    REGISTERING = "REGISTERING"
    REGISTERED = "REGISTERED"
    DEREGISTERING = "DEREGISTERING"
    DEREGISTERED = "DEREGISTERED"
    ERROR = "ERROR"

