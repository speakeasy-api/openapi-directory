import dataclasses
from enum import Enum

class TracingModeEnum(str, Enum):
    ACTIVE = "Active"
    PASS_THROUGH = "PassThrough"

