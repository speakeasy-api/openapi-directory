import dataclasses
from enum import Enum

class AdditionalArtifactEnum(str, Enum):
    REDSHIFT = "REDSHIFT"
    QUICKSIGHT = "QUICKSIGHT"
    ATHENA = "ATHENA"

