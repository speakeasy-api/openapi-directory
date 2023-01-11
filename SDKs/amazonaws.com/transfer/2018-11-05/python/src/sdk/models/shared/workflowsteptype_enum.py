import dataclasses
from enum import Enum

class WorkflowStepTypeEnum(str, Enum):
    COPY = "COPY"
    CUSTOM = "CUSTOM"
    TAG = "TAG"
    DELETE = "DELETE"

