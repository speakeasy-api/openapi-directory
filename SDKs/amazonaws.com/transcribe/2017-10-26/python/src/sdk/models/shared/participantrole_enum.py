import dataclasses
from enum import Enum

class ParticipantRoleEnum(str, Enum):
    AGENT = "AGENT"
    CUSTOMER = "CUSTOMER"

