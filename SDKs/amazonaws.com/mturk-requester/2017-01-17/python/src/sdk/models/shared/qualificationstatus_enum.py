import dataclasses
from enum import Enum

class QualificationStatusEnum(str, Enum):
    GRANTED = "Granted"
    REVOKED = "Revoked"

