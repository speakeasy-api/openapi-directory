import dataclasses
from enum import Enum

class ChoiceStatusEnum(str, Enum):
    SELECTED = "SELECTED"
    NOT_APPLICABLE = "NOT_APPLICABLE"
    UNSELECTED = "UNSELECTED"

