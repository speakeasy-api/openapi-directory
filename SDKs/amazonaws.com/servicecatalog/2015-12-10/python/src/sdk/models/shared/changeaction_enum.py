import dataclasses
from enum import Enum

class ChangeActionEnum(str, Enum):
    ADD = "ADD"
    MODIFY = "MODIFY"
    REMOVE = "REMOVE"

