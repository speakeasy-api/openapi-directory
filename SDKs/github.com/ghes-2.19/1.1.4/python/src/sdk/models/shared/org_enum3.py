import dataclasses
from enum import Enum

class OrgEnum3(str, Enum):
    ALL = "all"
    ADMIN = "admin"
    MEMBER = "member"

