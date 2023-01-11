import dataclasses
from enum import Enum

class ClipFragmentSelectorTypeEnum(str, Enum):
    PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP"
    SERVER_TIMESTAMP = "SERVER_TIMESTAMP"

