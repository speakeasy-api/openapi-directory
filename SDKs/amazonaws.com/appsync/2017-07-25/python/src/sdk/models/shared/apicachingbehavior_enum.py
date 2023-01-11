import dataclasses
from enum import Enum

class APICachingBehaviorEnum(str, Enum):
    FULL_REQUEST_CACHING = "FULL_REQUEST_CACHING"
    PER_RESOLVER_CACHING = "PER_RESOLVER_CACHING"

