import dataclasses
from enum import Enum

class DomainStatusTypeEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"

