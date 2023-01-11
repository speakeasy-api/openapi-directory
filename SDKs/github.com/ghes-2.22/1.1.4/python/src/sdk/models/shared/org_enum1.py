import dataclasses
from enum import Enum

class OrgEnum1(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"

