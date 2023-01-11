import dataclasses
from enum import Enum

class OptimisationActionNameEnum(str, Enum):
    REENABLE = "reenable"
    DISABLE = "disable"

