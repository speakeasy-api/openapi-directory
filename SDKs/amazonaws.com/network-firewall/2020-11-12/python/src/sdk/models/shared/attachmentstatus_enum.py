import dataclasses
from enum import Enum

class AttachmentStatusEnum(str, Enum):
    CREATING = "CREATING"
    DELETING = "DELETING"
    SCALING = "SCALING"
    READY = "READY"

