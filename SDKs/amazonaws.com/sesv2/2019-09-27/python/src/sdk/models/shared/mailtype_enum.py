import dataclasses
from enum import Enum

class MailTypeEnum(str, Enum):
    MARKETING = "MARKETING"
    TRANSACTIONAL = "TRANSACTIONAL"

