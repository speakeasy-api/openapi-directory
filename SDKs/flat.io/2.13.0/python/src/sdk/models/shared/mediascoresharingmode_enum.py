import dataclasses
from enum import Enum

class MediaScoreSharingModeEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    COPY = "copy"
    PERFORMANCE = "performance"

