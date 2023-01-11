import dataclasses
from enum import Enum

class BotAliasStatusEnum(str, Enum):
    CREATING = "Creating"
    AVAILABLE = "Available"
    DELETING = "Deleting"
    FAILED = "Failed"

