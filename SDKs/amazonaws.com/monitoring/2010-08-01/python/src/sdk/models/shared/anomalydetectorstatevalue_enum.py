import dataclasses
from enum import Enum

class AnomalyDetectorStateValueEnum(str, Enum):
    PENDING_TRAINING = "PENDING_TRAINING"
    TRAINED_INSUFFICIENT_DATA = "TRAINED_INSUFFICIENT_DATA"
    TRAINED = "TRAINED"

