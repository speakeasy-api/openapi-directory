import dataclasses
from enum import Enum

class SessionConnectionStateEnum(str, Enum):
    CONNECTED = "CONNECTED"
    NOT_CONNECTED = "NOT_CONNECTED"

