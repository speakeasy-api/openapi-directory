import dataclasses
from enum import Enum

class TemplateTypeEnum(str, Enum):
    EMAIL = "EMAIL"
    SMS = "SMS"
    VOICE = "VOICE"
    PUSH = "PUSH"
    INAPP = "INAPP"

