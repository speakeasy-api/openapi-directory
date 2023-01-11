import dataclasses
from enum import Enum

class AquaConfigurationStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    AUTO = "auto"

