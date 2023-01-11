import dataclasses
from enum import Enum

class RepoEnum(str, Enum):
    OUTSIDE = "outside"
    DIRECT = "direct"
    ALL = "all"

