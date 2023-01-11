import dataclasses
from enum import Enum

class EndpointSettingTypeValueEnum(str, Enum):
    STRING = "string"
    BOOLEAN = "boolean"
    INTEGER = "integer"
    ENUM = "enum"

