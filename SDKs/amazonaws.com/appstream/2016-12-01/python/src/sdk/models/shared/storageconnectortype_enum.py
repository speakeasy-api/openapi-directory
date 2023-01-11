import dataclasses
from enum import Enum

class StorageConnectorTypeEnum(str, Enum):
    HOMEFOLDERS = "HOMEFOLDERS"
    GOOGLE_DRIVE = "GOOGLE_DRIVE"
    ONE_DRIVE = "ONE_DRIVE"

