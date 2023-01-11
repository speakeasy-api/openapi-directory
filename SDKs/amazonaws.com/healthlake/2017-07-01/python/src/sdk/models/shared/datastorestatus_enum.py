import dataclasses
from enum import Enum

class DatastoreStatusEnum(str, Enum):
    CREATING = "CREATING"
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"
    DELETED = "DELETED"

