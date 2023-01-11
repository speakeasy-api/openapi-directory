import dataclasses
from enum import Enum

class ChannelProtocolEnum(str, Enum):
    WSS = "WSS"
    HTTPS = "HTTPS"

