import dataclasses
from enum import Enum

class VirtualGatewayListenerTLSModeEnum(str, Enum):
    STRICT = "STRICT"
    PERMISSIVE = "PERMISSIVE"
    DISABLED = "DISABLED"

