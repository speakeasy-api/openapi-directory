import dataclasses
from enum import Enum

class ReportExportConfigTypeEnum(str, Enum):
    S3 = "S3"
    NO_EXPORT = "NO_EXPORT"

