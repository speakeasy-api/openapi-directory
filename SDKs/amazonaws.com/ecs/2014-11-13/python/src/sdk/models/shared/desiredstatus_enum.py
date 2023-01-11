import dataclasses
from enum import Enum

class DesiredStatusEnum(str, Enum):
    RUNNING = "RUNNING"
    PENDING = "PENDING"
    STOPPED = "STOPPED"

