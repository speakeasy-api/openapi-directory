import dataclasses
from enum import Enum

class FlexMatchModeEnum(str, Enum):
    STANDALONE = "STANDALONE"
    WITH_QUEUE = "WITH_QUEUE"

