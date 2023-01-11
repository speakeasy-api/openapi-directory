import dataclasses
from enum import Enum

class MaintenanceStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

