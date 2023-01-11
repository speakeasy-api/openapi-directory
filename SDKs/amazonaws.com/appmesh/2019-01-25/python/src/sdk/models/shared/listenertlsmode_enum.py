import dataclasses
from enum import Enum

class ListenerTLSModeEnum(str, Enum):
    STRICT = "STRICT"
    PERMISSIVE = "PERMISSIVE"
    DISABLED = "DISABLED"

