import dataclasses
from enum import Enum

class ExperimentActionStatusEnum(str, Enum):
    PENDING = "pending"
    INITIATING = "initiating"
    RUNNING = "running"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    STOPPING = "stopping"
    STOPPED = "stopped"
    FAILED = "failed"

