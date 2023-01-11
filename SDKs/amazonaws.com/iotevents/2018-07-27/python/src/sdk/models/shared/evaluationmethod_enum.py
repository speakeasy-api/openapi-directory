import dataclasses
from enum import Enum

class EvaluationMethodEnum(str, Enum):
    BATCH = "BATCH"
    SERIAL = "SERIAL"

