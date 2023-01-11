import dataclasses
from enum import Enum

class ApplicationModeEnum(str, Enum):
    STREAMING = "STREAMING"
    INTERACTIVE = "INTERACTIVE"

