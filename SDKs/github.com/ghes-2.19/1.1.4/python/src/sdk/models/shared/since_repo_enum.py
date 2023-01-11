import dataclasses
from enum import Enum

class SinceRepoEnum(str, Enum):
    ALL = "all"
    PUBLIC = "public"

