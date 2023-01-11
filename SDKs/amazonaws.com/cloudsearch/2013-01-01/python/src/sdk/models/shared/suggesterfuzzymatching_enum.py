import dataclasses
from enum import Enum

class SuggesterFuzzyMatchingEnum(str, Enum):
    NONE = "none"
    LOW = "low"
    HIGH = "high"

