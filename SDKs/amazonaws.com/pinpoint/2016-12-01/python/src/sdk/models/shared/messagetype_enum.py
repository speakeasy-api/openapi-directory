import dataclasses
from enum import Enum

class MessageTypeEnum(str, Enum):
    TRANSACTIONAL = "TRANSACTIONAL"
    PROMOTIONAL = "PROMOTIONAL"

