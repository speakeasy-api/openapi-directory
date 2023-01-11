import dataclasses
from enum import Enum

class ResourceTypeEnum(str, Enum):
    DATABASE = "DATABASE"
    TABLE = "TABLE"

