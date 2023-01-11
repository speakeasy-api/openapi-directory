import dataclasses
from enum import Enum

class StoreUserRoleEnum(str, Enum):
    OWNER = "Owner"
    USER = "User"

