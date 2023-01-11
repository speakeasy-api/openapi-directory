import dataclasses
from enum import Enum

class UploadCategoryEnum(str, Enum):
    CURATED = "CURATED"
    PRIVATE = "PRIVATE"

