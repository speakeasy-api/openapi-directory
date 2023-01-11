import dataclasses
from enum import Enum

class InstanceAccessProtocolEnum(str, Enum):
    SSH = "ssh"
    RDP = "rdp"

