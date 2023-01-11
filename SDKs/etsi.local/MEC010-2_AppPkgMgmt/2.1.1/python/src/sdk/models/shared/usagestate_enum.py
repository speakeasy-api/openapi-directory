import dataclasses
from enum import Enum

class UsageStateEnum(str, Enum):
    IN_USE = "IN_USE"
    NOT_IN_USE = "NOT_IN_USE"

