import dataclasses
from enum import Enum

class ActivityStreamStatusEnum(str, Enum):
    STOPPED = "stopped"
    STARTING = "starting"
    STARTED = "started"
    STOPPING = "stopping"

