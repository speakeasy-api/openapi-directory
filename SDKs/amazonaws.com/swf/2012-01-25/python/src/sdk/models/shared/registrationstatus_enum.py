import dataclasses
from enum import Enum

class RegistrationStatusEnum(str, Enum):
    REGISTERED = "REGISTERED"
    DEPRECATED = "DEPRECATED"

