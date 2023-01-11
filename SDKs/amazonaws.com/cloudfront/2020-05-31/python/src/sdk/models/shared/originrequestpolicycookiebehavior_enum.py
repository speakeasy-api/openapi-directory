import dataclasses
from enum import Enum

class OriginRequestPolicyCookieBehaviorEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"
    ALL = "all"

