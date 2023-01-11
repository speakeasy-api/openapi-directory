import dataclasses
from enum import Enum

class ResourceBucketAccessEnum(str, Enum):
    ALLOW = "allow"
    DENY = "deny"

