import dataclasses
from enum import Enum

class ConnectionStateEnum(str, Enum):
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"
    UNKNOWN = "UNKNOWN"

