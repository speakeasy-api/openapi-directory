import dataclasses
from enum import Enum

class DestinationSyncModeEnum(str, Enum):
    APPEND = "append"
    OVERWRITE = "overwrite"
    APPEND_DEDUP = "append_dedup"

