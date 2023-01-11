import dataclasses
from enum import Enum

class DashFragmentSelectorTypeEnum(str, Enum):
    PRODUCER_TIMESTAMP = "PRODUCER_TIMESTAMP"
    SERVER_TIMESTAMP = "SERVER_TIMESTAMP"

