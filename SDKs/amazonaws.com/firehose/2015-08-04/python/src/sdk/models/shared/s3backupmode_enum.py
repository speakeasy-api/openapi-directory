import dataclasses
from enum import Enum

class S3BackupModeEnum(str, Enum):
    DISABLED = "Disabled"
    ENABLED = "Enabled"

