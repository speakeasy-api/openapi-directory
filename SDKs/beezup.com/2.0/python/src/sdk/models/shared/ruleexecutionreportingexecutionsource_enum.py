import dataclasses
from enum import Enum

class RuleExecutionReportingExecutionSourceEnum(str, Enum):
    SCHEDULER = "Scheduler"
    USER = "User"

