import dataclasses
from enum import Enum

class LogTypeEnum(str, Enum):
    API = "api"
    AUDIT = "audit"
    AUTHENTICATOR = "authenticator"
    CONTROLLER_MANAGER = "controllerManager"
    SCHEDULER = "scheduler"

