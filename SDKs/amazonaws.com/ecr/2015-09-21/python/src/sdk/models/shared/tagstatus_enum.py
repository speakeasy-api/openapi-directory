import dataclasses
from enum import Enum

class TagStatusEnum(str, Enum):
    TAGGED = "TAGGED"
    UNTAGGED = "UNTAGGED"
    ANY = "ANY"

