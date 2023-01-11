import dataclasses
from enum import Enum

class AuthorizationStatusEnum(str, Enum):
    AUTHORIZED = "Authorized"
    REVOKING = "Revoking"

