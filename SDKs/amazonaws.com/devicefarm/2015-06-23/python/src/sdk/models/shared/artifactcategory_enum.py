import dataclasses
from enum import Enum

class ArtifactCategoryEnum(str, Enum):
    SCREENSHOT = "SCREENSHOT"
    FILE = "FILE"
    LOG = "LOG"

