import dataclasses
from enum import Enum

class ComponentTypeEnum(str, Enum):
    BUILD = "BUILD"
    TEST = "TEST"

