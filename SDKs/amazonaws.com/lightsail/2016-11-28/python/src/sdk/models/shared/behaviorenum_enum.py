import dataclasses
from enum import Enum

class BehaviorEnumEnum(str, Enum):
    DONT_CACHE = "dont-cache"
    CACHE = "cache"

