import dataclasses
from enum import Enum

class EnvironmentHealthEnum(str, Enum):
    GREEN = "Green"
    YELLOW = "Yellow"
    RED = "Red"
    GREY = "Grey"

