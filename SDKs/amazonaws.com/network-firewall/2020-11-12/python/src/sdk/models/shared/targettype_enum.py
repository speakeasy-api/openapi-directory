import dataclasses
from enum import Enum

class TargetTypeEnum(str, Enum):
    TLS_SNI = "TLS_SNI"
    HTTP_HOST = "HTTP_HOST"

