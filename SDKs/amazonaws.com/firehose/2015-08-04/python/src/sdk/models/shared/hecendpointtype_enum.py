import dataclasses
from enum import Enum

class HecEndpointTypeEnum(str, Enum):
    RAW = "Raw"
    EVENT = "Event"

