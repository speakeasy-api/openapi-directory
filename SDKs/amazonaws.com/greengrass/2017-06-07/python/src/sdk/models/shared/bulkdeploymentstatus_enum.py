import dataclasses
from enum import Enum

class BulkDeploymentStatusEnum(str, Enum):
    INITIALIZING = "Initializing"
    RUNNING = "Running"
    COMPLETED = "Completed"
    STOPPING = "Stopping"
    STOPPED = "Stopped"
    FAILED = "Failed"

