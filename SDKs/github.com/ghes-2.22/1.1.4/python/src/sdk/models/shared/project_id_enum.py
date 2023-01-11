import dataclasses
from enum import Enum

class ProjectIDEnum(str, Enum):
    OUTSIDE = "outside"
    DIRECT = "direct"
    ALL = "all"

