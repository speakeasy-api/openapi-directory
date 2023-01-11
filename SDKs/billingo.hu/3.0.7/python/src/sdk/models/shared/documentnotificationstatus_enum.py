import dataclasses
from enum import Enum

class DocumentNotificationStatusEnum(str, Enum):
    CLOSED = "closed"
    DOWNLOADED = "downloaded"
    FAILED = "failed"
    NONE = "none"
    OPENED = "opened"
    READED = "readed"

