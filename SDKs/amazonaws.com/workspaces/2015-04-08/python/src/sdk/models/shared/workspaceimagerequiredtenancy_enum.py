import dataclasses
from enum import Enum

class WorkspaceImageRequiredTenancyEnum(str, Enum):
    DEFAULT = "DEFAULT"
    DEDICATED = "DEDICATED"

