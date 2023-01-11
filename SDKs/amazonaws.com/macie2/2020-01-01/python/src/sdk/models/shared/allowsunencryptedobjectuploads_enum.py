import dataclasses
from enum import Enum

class AllowsUnencryptedObjectUploadsEnum(str, Enum):
    TRUE = "TRUE"
    FALSE = "FALSE"
    UNKNOWN = "UNKNOWN"

