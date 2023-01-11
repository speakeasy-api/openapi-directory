import dataclasses
from enum import Enum

class MessageActionTypeEnum(str, Enum):
    RESEND = "RESEND"
    SUPPRESS = "SUPPRESS"

