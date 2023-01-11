import dataclasses
from enum import Enum

class ActionCodeEnum(str, Enum):
    ARCHIVE_RETRIEVAL = "ArchiveRetrieval"
    INVENTORY_RETRIEVAL = "InventoryRetrieval"
    SELECT = "Select"

