import dataclasses
from enum import Enum

class AuthenticateCognitoActionConditionalBehaviorEnumEnum(str, Enum):
    DENY = "deny"
    ALLOW = "allow"
    AUTHENTICATE = "authenticate"

