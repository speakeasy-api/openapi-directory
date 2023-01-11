import dataclasses
from enum import Enum

class CrawlerStateEnum(str, Enum):
    READY = "READY"
    RUNNING = "RUNNING"
    STOPPING = "STOPPING"

