import dataclasses
from enum import Enum

class ConnectionStatusEnum(str, Enum):
    CONNECTED = "CONNECTED"
    DISCONNECTED = "DISCONNECTED"

