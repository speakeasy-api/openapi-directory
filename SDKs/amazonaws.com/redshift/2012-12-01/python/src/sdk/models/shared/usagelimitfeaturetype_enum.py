import dataclasses
from enum import Enum

class UsageLimitFeatureTypeEnum(str, Enum):
    SPECTRUM = "spectrum"
    CONCURRENCY_SCALING = "concurrency-scaling"

