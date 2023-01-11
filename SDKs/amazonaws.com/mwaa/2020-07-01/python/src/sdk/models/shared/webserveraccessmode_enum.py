import dataclasses
from enum import Enum

class WebserverAccessModeEnum(str, Enum):
    PRIVATE_ONLY = "PRIVATE_ONLY"
    PUBLIC_ONLY = "PUBLIC_ONLY"

