import dataclasses
from enum import Enum

class EmailSendingAccountTypeEnum(str, Enum):
    COGNITO_DEFAULT = "COGNITO_DEFAULT"
    DEVELOPER = "DEVELOPER"

