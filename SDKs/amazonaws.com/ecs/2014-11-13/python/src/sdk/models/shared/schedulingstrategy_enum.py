import dataclasses
from enum import Enum

class SchedulingStrategyEnum(str, Enum):
    REPLICA = "REPLICA"
    DAEMON = "DAEMON"

