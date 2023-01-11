import dataclasses
from enum import Enum

class TrainingModeEnum(str, Enum):
    FULL = "FULL"
    UPDATE = "UPDATE"

