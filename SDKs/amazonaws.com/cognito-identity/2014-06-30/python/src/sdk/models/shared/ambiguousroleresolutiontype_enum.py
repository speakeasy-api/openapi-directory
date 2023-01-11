import dataclasses
from enum import Enum

class AmbiguousRoleResolutionTypeEnum(str, Enum):
    AUTHENTICATED_ROLE = "AuthenticatedRole"
    DENY = "Deny"

