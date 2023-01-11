import dataclasses
from enum import Enum

class EndpointStatusEnum(str, Enum):
    CREATED = "created"
    CREATING = "creating"
    DELETED = "deleted"
    DELETING = "deleting"
    FAILED = "failed"

