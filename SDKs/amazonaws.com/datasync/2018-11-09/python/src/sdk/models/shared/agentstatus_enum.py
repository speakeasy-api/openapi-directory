import dataclasses
from enum import Enum

class AgentStatusEnum(str, Enum):
    ONLINE = "ONLINE"
    OFFLINE = "OFFLINE"

