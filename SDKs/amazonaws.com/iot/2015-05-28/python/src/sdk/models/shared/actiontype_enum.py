import dataclasses
from enum import Enum

class ActionTypeEnum(str, Enum):
    PUBLISH = "PUBLISH"
    SUBSCRIBE = "SUBSCRIBE"
    RECEIVE = "RECEIVE"
    CONNECT = "CONNECT"

