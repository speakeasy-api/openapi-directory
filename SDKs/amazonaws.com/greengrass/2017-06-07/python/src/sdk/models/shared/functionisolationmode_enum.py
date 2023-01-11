import dataclasses
from enum import Enum

class FunctionIsolationModeEnum(str, Enum):
    GREENGRASS_CONTAINER = "GreengrassContainer"
    NO_CONTAINER = "NoContainer"

