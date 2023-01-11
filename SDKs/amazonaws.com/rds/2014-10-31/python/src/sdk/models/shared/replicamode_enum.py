import dataclasses
from enum import Enum

class ReplicaModeEnum(str, Enum):
    OPEN_READ_ONLY = "open-read-only"
    MOUNTED = "mounted"

