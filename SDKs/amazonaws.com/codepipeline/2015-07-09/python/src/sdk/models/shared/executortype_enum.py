import dataclasses
from enum import Enum

class ExecutorTypeEnum(str, Enum):
    JOB_WORKER = "JobWorker"
    LAMBDA = "Lambda"

