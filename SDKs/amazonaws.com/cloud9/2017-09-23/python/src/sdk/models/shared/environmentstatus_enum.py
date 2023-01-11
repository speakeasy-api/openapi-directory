import dataclasses
from enum import Enum

class EnvironmentStatusEnum(str, Enum):
    ERROR = "error"
    CREATING = "creating"
    CONNECTING = "connecting"
    READY = "ready"
    STOPPING = "stopping"
    STOPPED = "stopped"
    DELETING = "deleting"

