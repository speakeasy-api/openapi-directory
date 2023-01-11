import dataclasses
from enum import Enum

class ResolverQueryLogConfigStatusEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"
    FAILED = "FAILED"

