import dataclasses
from enum import Enum

class InteractionGroupEnum(str, Enum):
    EXISTING_USERS = "existing_users"
    CONTRIBUTORS_ONLY = "contributors_only"
    COLLABORATORS_ONLY = "collaborators_only"

