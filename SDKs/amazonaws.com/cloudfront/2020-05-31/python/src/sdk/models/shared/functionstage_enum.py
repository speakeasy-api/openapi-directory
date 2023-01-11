import dataclasses
from enum import Enum

class FunctionStageEnum(str, Enum):
    DEVELOPMENT = "DEVELOPMENT"
    LIVE = "LIVE"

