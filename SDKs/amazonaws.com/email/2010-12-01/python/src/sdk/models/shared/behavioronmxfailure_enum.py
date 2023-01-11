import dataclasses
from enum import Enum

class BehaviorOnMxFailureEnum(str, Enum):
    USE_DEFAULT_VALUE = "UseDefaultValue"
    REJECT_MESSAGE = "RejectMessage"

