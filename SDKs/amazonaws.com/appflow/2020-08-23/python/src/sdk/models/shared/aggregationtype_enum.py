import dataclasses
from enum import Enum

class AggregationTypeEnum(str, Enum):
    NONE = "None"
    SINGLE_FILE = "SingleFile"

