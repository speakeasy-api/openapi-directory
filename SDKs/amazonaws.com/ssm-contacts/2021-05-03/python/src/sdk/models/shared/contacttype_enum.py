import dataclasses
from enum import Enum

class ContactTypeEnum(str, Enum):
    PERSONAL = "PERSONAL"
    ESCALATION = "ESCALATION"

