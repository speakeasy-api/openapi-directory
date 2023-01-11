import dataclasses
from enum import Enum

class LambdaIsolationModeEnum(str, Enum):
    GREENGRASS_CONTAINER = "GreengrassContainer"
    NO_CONTAINER = "NoContainer"

