import dataclasses
from enum import Enum

class AquaStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    APPLYING = "applying"

