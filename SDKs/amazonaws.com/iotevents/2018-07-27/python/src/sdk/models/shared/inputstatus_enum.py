import dataclasses
from enum import Enum

class InputStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

