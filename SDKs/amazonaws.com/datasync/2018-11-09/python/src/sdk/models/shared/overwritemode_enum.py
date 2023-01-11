import dataclasses
from enum import Enum

class OverwriteModeEnum(str, Enum):
    ALWAYS = "ALWAYS"
    NEVER = "NEVER"

