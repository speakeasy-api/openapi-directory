import dataclasses
from enum import Enum

class PortProtocolEnum(str, Enum):
    HTTP = "http"
    TCP = "tcp"

