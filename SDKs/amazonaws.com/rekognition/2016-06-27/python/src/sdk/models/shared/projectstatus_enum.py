import dataclasses
from enum import Enum

class ProjectStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"

