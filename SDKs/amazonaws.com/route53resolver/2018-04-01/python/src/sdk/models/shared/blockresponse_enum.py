import dataclasses
from enum import Enum

class BlockResponseEnum(str, Enum):
    NODATA = "NODATA"
    NXDOMAIN = "NXDOMAIN"
    OVERRIDE = "OVERRIDE"

