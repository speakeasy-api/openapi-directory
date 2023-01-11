import dataclasses
from enum import Enum

class GenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    UNISEX = "unisex"
    OTHER = "other"
    NOT_SPECIFIED = "not_specified"

