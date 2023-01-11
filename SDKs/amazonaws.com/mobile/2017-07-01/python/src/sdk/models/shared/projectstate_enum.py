import dataclasses
from enum import Enum

class ProjectStateEnum(str, Enum):
    NORMAL = "NORMAL"
    SYNCING = "SYNCING"
    IMPORTING = "IMPORTING"

