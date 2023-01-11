import dataclasses
from enum import Enum

class FindingSourceTypeEnum(str, Enum):
    POLICY = "POLICY"
    BUCKET_ACL = "BUCKET_ACL"
    S3_ACCESS_POINT = "S3_ACCESS_POINT"

