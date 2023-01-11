import dataclasses
from enum import Enum

class StoreStatusEnum(str, Enum):
    ACTIVE = "Active"
    SYSTEM_BLOCKED = "SystemBlocked"
    USER_BLOCKED = "UserBlocked"

