import dataclasses
from enum import Enum

class ReportGroupStatusTypeEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETING = "DELETING"

