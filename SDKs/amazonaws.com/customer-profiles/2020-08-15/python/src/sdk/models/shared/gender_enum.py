import dataclasses
from enum import Enum

class GenderEnum(str, Enum):
    MALE = "MALE"
    FEMALE = "FEMALE"
    UNSPECIFIED = "UNSPECIFIED"

