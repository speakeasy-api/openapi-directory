import dataclasses
from enum import Enum

class DataPullModeEnum(str, Enum):
    INCREMENTAL = "Incremental"
    COMPLETE = "Complete"

