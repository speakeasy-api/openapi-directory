import dataclasses
from enum import Enum

class APIKeyEnum1(str, Enum):
    SHARE = "Share"
    MODIFY = "Modify"
    USE_COMMERCIALLY = "Use commercially"
    ALL_RIGHTS_RESERVED = "All rights reserved"
    UNKNOWN = "Unknown"

