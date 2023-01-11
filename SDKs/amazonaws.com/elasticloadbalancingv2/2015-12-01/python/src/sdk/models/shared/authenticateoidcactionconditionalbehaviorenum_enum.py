import dataclasses
from enum import Enum

class AuthenticateOidcActionConditionalBehaviorEnumEnum(str, Enum):
    DENY = "deny"
    ALLOW = "allow"
    AUTHENTICATE = "authenticate"

