import dataclasses
from typing import Optional
from enum import Enum

class BeezUpCommonColumnImportanceEnum(str, Enum):
    REQUIRED = "Required"
    RECOMMENDED = "Recommended"
    OPTIONAL = "Optional"

