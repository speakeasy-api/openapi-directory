import dataclasses
from enum import Enum

class LastCrawlStatusEnum(str, Enum):
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    FAILED = "FAILED"

