import dataclasses
from enum import Enum

class ChangeActionEnum(str, Enum):
    INSERT = "INSERT"
    DELETE = "DELETE"

