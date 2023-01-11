import dataclasses
from enum import Enum

class CachePolicyQueryStringBehaviorEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"
    ALL_EXCEPT = "allExcept"
    ALL = "all"

