import dataclasses
from enum import Enum

class InventoryTypeEnum(str, Enum):
    USED = "used"
    NEW = "new"

