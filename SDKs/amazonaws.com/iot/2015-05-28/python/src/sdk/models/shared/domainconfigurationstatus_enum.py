import dataclasses
from enum import Enum

class DomainConfigurationStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"

