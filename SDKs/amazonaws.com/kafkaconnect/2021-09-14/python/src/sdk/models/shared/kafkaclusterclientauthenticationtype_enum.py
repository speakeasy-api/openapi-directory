import dataclasses
from enum import Enum

class KafkaClusterClientAuthenticationTypeEnum(str, Enum):
    NONE = "NONE"
    IAM = "IAM"

