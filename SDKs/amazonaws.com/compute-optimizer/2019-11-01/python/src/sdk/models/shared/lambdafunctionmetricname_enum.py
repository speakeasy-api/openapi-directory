import dataclasses
from enum import Enum

class LambdaFunctionMetricNameEnum(str, Enum):
    DURATION = "Duration"
    MEMORY = "Memory"

