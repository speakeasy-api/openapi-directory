import dataclasses
from enum import Enum

class InterfaceTypeEnum(str, Enum):
    TUNNEL = "TUNNEL"
    MAC = "MAC"
    IP = "IP"

