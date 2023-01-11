import dataclasses
from enum import Enum

class DatasetTypeEnum(str, Enum):
    TARGET_TIME_SERIES = "TARGET_TIME_SERIES"
    RELATED_TIME_SERIES = "RELATED_TIME_SERIES"
    ITEM_METADATA = "ITEM_METADATA"

