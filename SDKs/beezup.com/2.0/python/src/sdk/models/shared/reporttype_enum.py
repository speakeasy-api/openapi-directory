import dataclasses
from enum import Enum

class ReportTypeEnum(str, Enum):
    BY_CHANNEL = "ByChannel"
    BY_CATEGORY = "ByCategory"
    BY_PRODUCT = "ByProduct"
    BY_DAY = "ByDay"

