import dataclasses
from enum import Enum

class NodeTypeEnum(str, Enum):
    CRAWLER = "CRAWLER"
    JOB = "JOB"
    TRIGGER = "TRIGGER"

