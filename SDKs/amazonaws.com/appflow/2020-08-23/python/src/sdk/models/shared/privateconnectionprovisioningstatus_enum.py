import dataclasses
from enum import Enum

class PrivateConnectionProvisioningStatusEnum(str, Enum):
    FAILED = "FAILED"
    PENDING = "PENDING"
    CREATED = "CREATED"

