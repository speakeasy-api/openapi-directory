import dataclasses
from enum import Enum

class CloudWatchLogsTimeZoneEnum(str, Enum):
    LOCAL = "LOCAL"
    UTC = "UTC"

