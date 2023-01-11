import dataclasses
from enum import Enum

class ListJobsFilterKeyEnum(str, Enum):
    JOB_TYPE = "jobType"
    JOB_STATUS = "jobStatus"
    CREATED_AT = "createdAt"
    NAME = "name"

