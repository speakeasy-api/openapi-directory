import dataclasses
from enum import Enum

class ChannelTypeEnum(str, Enum):
    SMS = "SMS"
    VOICE = "VOICE"
    EMAIL = "EMAIL"

