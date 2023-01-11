import dataclasses
from enum import Enum

class LoadBalancerStateEnum(str, Enum):
    ACTIVE = "active"
    PROVISIONING = "provisioning"
    ACTIVE_IMPAIRED = "active_impaired"
    FAILED = "failed"
    UNKNOWN = "unknown"

