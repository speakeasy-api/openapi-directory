import dataclasses
from enum import Enum

class UsageLimitBreachActionEnum(str, Enum):
    LOG = "log"
    EMIT_METRIC = "emit-metric"
    DISABLE = "disable"

