import dataclasses
from enum import Enum

class DestinationTypeEnum(str, Enum):
    CLOUDWATCH_LOGS = "cloudwatch-logs"
    KINESIS_FIREHOSE = "kinesis-firehose"

