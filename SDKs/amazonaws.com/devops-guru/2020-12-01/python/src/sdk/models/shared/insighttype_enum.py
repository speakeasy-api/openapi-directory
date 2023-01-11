import dataclasses
from enum import Enum

class InsightTypeEnum(str, Enum):
    REACTIVE = "REACTIVE"
    PROACTIVE = "PROACTIVE"

