import dataclasses
from enum import Enum

class OriginTypeEnum(str, Enum):
    AWS_KMS = "AWS_KMS"
    EXTERNAL = "EXTERNAL"
    AWS_CLOUDHSM = "AWS_CLOUDHSM"

