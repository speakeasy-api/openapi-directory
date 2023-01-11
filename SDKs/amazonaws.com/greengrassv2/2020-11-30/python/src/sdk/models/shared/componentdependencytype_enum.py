import dataclasses
from enum import Enum

class ComponentDependencyTypeEnum(str, Enum):
    HARD = "HARD"
    SOFT = "SOFT"

