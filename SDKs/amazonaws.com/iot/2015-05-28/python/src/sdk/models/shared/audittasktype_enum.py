import dataclasses
from enum import Enum

class AuditTaskTypeEnum(str, Enum):
    ON_DEMAND_AUDIT_TASK = "ON_DEMAND_AUDIT_TASK"
    SCHEDULED_AUDIT_TASK = "SCHEDULED_AUDIT_TASK"

