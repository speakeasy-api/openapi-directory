import dataclasses
from enum import Enum

class ExportSnapshotRecordSourceTypeEnum(str, Enum):
    INSTANCE_SNAPSHOT = "InstanceSnapshot"
    DISK_SNAPSHOT = "DiskSnapshot"

