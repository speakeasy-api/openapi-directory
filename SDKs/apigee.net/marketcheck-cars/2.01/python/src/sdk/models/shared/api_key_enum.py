import dataclasses
from enum import Enum

class APIKeyEnum(str, Enum):
    NEW = "new"
    USED = "used"

