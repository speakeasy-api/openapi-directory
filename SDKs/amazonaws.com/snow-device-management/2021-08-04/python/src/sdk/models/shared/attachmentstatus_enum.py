import dataclasses
from enum import Enum

class AttachmentStatusEnum(str, Enum):
    ATTACHING = "ATTACHING"
    ATTACHED = "ATTACHED"
    DETACHING = "DETACHING"
    DETACHED = "DETACHED"

