import dataclasses
from enum import Enum

class LambdaFilesystemPermissionEnum(str, Enum):
    RO = "ro"
    RW = "rw"

