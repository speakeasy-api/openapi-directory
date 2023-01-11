import dataclasses
from enum import Enum

class RepoEnum2(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"

