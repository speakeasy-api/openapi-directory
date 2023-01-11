import dataclasses
from enum import Enum

class NodeAssociationStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"
    IN_PROGRESS = "IN_PROGRESS"

