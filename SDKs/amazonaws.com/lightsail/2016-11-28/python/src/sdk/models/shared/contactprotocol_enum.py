import dataclasses
from enum import Enum

class ContactProtocolEnum(str, Enum):
    EMAIL = "Email"
    SMS = "SMS"

