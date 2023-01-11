import dataclasses
from enum import Enum

class ThresholdTypeEnum(str, Enum):
    PERCENTAGE = "PERCENTAGE"
    ABSOLUTE_VALUE = "ABSOLUTE_VALUE"

