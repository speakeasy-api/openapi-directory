import dataclasses
from enum import Enum

class ProtocolEnum(str, Enum):
    MQTT = "MQTT"
    HTTP = "HTTP"

