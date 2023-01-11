import dataclasses
from enum import Enum

class FirelensConfigurationTypeEnum(str, Enum):
    FLUENTD = "fluentd"
    FLUENTBIT = "fluentbit"

