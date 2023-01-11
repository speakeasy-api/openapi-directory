import dataclasses
from enum import Enum

class SamplingStrategyNameEnum(str, Enum):
    PARTIAL_SCAN = "PartialScan"
    FIXED_RATE = "FixedRate"

