import dataclasses
from enum import Enum

class ItemSelectionEnum(str, Enum):
    NONE = "none"
    WHITELIST = "whitelist"
    ALL = "all"

