import dataclasses
from enum import Enum

class ArrayJobDependencyEnum(str, Enum):
    N_TO_N = "N_TO_N"
    SEQUENTIAL = "SEQUENTIAL"

