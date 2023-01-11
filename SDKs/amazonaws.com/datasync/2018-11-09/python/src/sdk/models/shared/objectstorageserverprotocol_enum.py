import dataclasses
from enum import Enum

class ObjectStorageServerProtocolEnum(str, Enum):
    HTTPS = "HTTPS"
    HTTP = "HTTP"

