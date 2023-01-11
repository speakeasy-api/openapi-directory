import dataclasses
from enum import Enum

class PublicationStrategyKindEnum(str, Enum):
    DELTA = "Delta"
    FULL = "Full"

