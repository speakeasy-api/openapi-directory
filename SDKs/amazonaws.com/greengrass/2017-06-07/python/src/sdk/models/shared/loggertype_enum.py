import dataclasses
from enum import Enum

class LoggerTypeEnum(str, Enum):
    FILE_SYSTEM = "FileSystem"
    AWS_CLOUD_WATCH = "AWSCloudWatch"

