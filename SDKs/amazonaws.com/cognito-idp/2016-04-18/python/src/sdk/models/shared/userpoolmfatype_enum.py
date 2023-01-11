import dataclasses
from enum import Enum

class UserPoolMfaTypeEnum(str, Enum):
    OFF = "OFF"
    ON = "ON"
    OPTIONAL = "OPTIONAL"

