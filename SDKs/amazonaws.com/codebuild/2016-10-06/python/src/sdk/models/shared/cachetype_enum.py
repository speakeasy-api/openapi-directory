import dataclasses
from enum import Enum

class CacheTypeEnum(str, Enum):
    NO_CACHE = "NO_CACHE"
    S3 = "S3"
    LOCAL = "LOCAL"

