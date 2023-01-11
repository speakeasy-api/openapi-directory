import dataclasses
from enum import Enum

class MessageTypeEnum(str, Enum):
    RAW = "RAW"
    DIGEST = "DIGEST"

