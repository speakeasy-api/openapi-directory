import dataclasses
from enum import Enum

class InferenceSchedulerStatusEnum(str, Enum):
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"

