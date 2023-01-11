import dataclasses
from enum import Enum

class MappingStatusEnum(str, Enum):
    REQUIRED = "required"
    OPTIONAL = "optional"
    NOT_CONFIGURABLE = "notConfigurable"

