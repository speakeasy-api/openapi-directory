import dataclasses
from enum import Enum

class AccountStatusEnum(str, Enum):
    ACTIVE = "Active"
    SYSTEM_BLOCKED = "SystemBlocked"
    USER_BLOCKED = "UserBlocked"
    NOT_ACTIVATED = "NotActivated"

