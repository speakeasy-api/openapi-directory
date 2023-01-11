import dataclasses
from enum import Enum

class LogTypeEnum(str, Enum):
    SERVER = "server"
    SCHEDULER = "scheduler"

