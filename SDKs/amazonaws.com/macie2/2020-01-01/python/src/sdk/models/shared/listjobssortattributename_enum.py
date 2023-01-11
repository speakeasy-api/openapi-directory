import dataclasses
from enum import Enum

class ListJobsSortAttributeNameEnum(str, Enum):
    CREATED_AT = "createdAt"
    JOB_STATUS = "jobStatus"
    NAME = "name"
    JOB_TYPE = "jobType"

