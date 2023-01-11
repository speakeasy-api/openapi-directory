import dataclasses
from enum import Enum

class FirewallStatusValueEnum(str, Enum):
    PROVISIONING = "PROVISIONING"
    DELETING = "DELETING"
    READY = "READY"

