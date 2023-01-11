import dataclasses
from enum import Enum

class JqStatusEnum(str, Enum):
    CREATING = "CREATING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    DELETED = "DELETED"
    VALID = "VALID"
    INVALID = "INVALID"

