import dataclasses
from enum import Enum

class PreventUserExistenceErrorTypesEnum(str, Enum):
    LEGACY = "LEGACY"
    ENABLED = "ENABLED"

