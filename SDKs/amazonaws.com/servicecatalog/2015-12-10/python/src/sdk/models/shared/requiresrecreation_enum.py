import dataclasses
from enum import Enum

class RequiresRecreationEnum(str, Enum):
    NEVER = "NEVER"
    CONDITIONALLY = "CONDITIONALLY"
    ALWAYS = "ALWAYS"

