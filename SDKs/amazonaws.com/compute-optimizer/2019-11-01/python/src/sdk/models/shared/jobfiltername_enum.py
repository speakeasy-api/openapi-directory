import dataclasses
from enum import Enum

class JobFilterNameEnum(str, Enum):
    RESOURCE_TYPE = "ResourceType"
    JOB_STATUS = "JobStatus"

