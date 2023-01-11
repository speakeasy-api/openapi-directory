import dataclasses
from enum import Enum

class VerifiedAttributeTypeEnum(str, Enum):
    PHONE_NUMBER = "phone_number"
    EMAIL = "email"

