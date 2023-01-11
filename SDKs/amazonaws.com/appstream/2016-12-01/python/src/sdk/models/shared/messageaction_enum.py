import dataclasses
from enum import Enum

class MessageActionEnum(str, Enum):
    SUPPRESS = "SUPPRESS"
    RESEND = "RESEND"

