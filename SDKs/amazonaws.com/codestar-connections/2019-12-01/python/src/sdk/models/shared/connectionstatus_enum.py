import dataclasses
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    PENDING = "PENDING"
    AVAILABLE = "AVAILABLE"
    ERROR = "ERROR"

