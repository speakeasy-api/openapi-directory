import dataclasses
from enum import Enum

class RefreshSchemasStatusTypeValueEnum(str, Enum):
    SUCCESSFUL = "successful"
    FAILED = "failed"
    REFRESHING = "refreshing"

