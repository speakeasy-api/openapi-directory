import dataclasses
from enum import Enum

class RoleMappingTypeEnum(str, Enum):
    TOKEN = "Token"
    RULES = "Rules"

