import dataclasses
from enum import Enum

class PersonTrackingSortByEnum(str, Enum):
    INDEX = "INDEX"
    TIMESTAMP = "TIMESTAMP"

