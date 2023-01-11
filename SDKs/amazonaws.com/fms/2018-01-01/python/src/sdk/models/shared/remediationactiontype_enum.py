import dataclasses
from enum import Enum

class RemediationActionTypeEnum(str, Enum):
    REMOVE = "REMOVE"
    MODIFY = "MODIFY"

