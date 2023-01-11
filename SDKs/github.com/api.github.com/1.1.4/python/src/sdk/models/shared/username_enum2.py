import dataclasses
from enum import Enum

class UsernameEnum2(str, Enum):
    ALL = "all"
    OWNER = "owner"
    MEMBER = "member"

