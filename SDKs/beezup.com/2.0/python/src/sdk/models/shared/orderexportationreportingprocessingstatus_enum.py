import dataclasses
from enum import Enum

class OrderExportationReportingProcessingStatusEnum(str, Enum):
    NONE = "None"
    IN_PROGRESS = "InProgress"
    DONE = "Done"
    FAILED = "Failed"
    ALREADY_IN_PROGRESS = "AlreadyInProgress"
    ABORTED = "Aborted"
    SUSPENDED = "Suspended"

