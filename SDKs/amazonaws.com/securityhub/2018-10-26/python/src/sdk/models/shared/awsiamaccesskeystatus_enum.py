import dataclasses
from enum import Enum

class AwsIamAccessKeyStatusEnum(str, Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"

