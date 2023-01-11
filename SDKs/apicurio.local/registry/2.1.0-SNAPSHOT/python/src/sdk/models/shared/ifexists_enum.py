import dataclasses
from enum import Enum

class IfExistsEnum(str, Enum):
    FAIL = "FAIL"
    UPDATE = "UPDATE"
    RETURN = "RETURN"
    RETURN_OR_UPDATE = "RETURN_OR_UPDATE"

