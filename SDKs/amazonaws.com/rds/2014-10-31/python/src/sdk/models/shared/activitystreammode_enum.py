import dataclasses
from enum import Enum

class ActivityStreamModeEnum(str, Enum):
    SYNC = "sync"
    ASYNC = "async"

