import dataclasses
from enum import Enum

class WorkspacePathGidEnum(str, Enum):
    CUSTOM_FIELD = "custom_field"
    PORTFOLIO = "portfolio"
    PROJECT = "project"
    TAG = "tag"
    TASK = "task"
    USER = "user"

