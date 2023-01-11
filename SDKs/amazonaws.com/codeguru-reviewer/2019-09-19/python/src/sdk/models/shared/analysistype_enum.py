import dataclasses
from enum import Enum

class AnalysisTypeEnum(str, Enum):
    SECURITY = "Security"
    CODE_QUALITY = "CodeQuality"

