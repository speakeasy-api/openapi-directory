import dataclasses
from enum import Enum

class BackupTypeEnum(str, Enum):
    AUTOMATED = "AUTOMATED"
    MANUAL = "MANUAL"

