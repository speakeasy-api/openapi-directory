import dataclasses
from enum import Enum

class ExistConditionEnum(str, Enum):
    MUST_EXIST = "MUST_EXIST"
    NOT_EXIST = "NOT_EXIST"
    NONE = "NONE"

