import dataclasses
from enum import Enum

class ConnectionAliasStateEnum(str, Enum):
    CREATING = "CREATING"
    CREATED = "CREATED"
    DELETING = "DELETING"

