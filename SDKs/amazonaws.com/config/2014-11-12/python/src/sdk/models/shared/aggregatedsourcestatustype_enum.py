import dataclasses
from enum import Enum

class AggregatedSourceStatusTypeEnum(str, Enum):
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    OUTDATED = "OUTDATED"

