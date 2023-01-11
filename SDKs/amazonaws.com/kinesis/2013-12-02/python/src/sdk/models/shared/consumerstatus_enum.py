import dataclasses
from enum import Enum

class ConsumerStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"

