import dataclasses
from enum import Enum

class BaseModelNameEnum(str, Enum):
    NARROW_BAND = "NarrowBand"
    WIDE_BAND = "WideBand"

