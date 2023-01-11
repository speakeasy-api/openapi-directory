import dataclasses
from enum import Enum

class CostStatusEnum(str, Enum):
    REQUIRED = "required"
    OPTIONAL = "optional"
    NOT_CONFIGURABLE = "notConfigurable"

