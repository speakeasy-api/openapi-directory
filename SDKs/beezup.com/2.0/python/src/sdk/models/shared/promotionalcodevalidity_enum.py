import dataclasses
from enum import Enum

class PromotionalCodeValidityEnum(str, Enum):
    NONE = "None"
    VALID = "Valid"
    INVALID = "Invalid"
    EXPIRED_OR_INACTIVE = "ExpiredOrInactive"

