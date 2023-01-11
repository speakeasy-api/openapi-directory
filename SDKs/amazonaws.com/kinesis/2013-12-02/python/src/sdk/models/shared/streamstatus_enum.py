import dataclasses
from enum import Enum

class StreamStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"

