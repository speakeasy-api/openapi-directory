import dataclasses
from enum import Enum

class ActionOwnerEnum(str, Enum):
    AWS = "AWS"
    THIRD_PARTY = "ThirdParty"
    CUSTOM = "Custom"

