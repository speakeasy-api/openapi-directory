import dataclasses
from enum import Enum

class AuditReportResponseFormatEnum(str, Enum):
    JSON = "JSON"
    CSV = "CSV"

