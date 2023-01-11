import dataclasses
from enum import Enum

class ItemTypeEnum(str, Enum):
    ANALYSIS = "ANALYSIS"
    INCIDENT = "INCIDENT"
    METRIC = "METRIC"
    PARENT = "PARENT"
    ATTACHMENT = "ATTACHMENT"
    OTHER = "OTHER"

