import dataclasses
from enum import Enum

class UsernameEnum1(str, Enum):
    OPEN = "open"
    CLOSED = "closed"
    ALL = "all"

