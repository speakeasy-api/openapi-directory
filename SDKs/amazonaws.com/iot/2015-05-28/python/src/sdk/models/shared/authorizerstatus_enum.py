import dataclasses
from enum import Enum

class AuthorizerStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

