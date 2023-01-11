import dataclasses
from enum import Enum

class ConnectionStateTypeEnum(str, Enum):
    CONNECTED = "CONNECTED"
    CONNECTING = "CONNECTING"
    FAILED = "FAILED"
    DISCONNECTED = "DISCONNECTED"
    DISCONNECTING = "DISCONNECTING"

