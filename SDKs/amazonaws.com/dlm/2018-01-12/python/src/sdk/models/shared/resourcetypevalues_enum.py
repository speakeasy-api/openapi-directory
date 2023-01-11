import dataclasses
from enum import Enum

class ResourceTypeValuesEnum(str, Enum):
    VOLUME = "VOLUME"
    INSTANCE = "INSTANCE"

