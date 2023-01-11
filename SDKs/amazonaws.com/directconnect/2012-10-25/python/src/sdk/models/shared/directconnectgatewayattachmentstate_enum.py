import dataclasses
from enum import Enum

class DirectConnectGatewayAttachmentStateEnum(str, Enum):
    ATTACHING = "attaching"
    ATTACHED = "attached"
    DETACHING = "detaching"
    DETACHED = "detached"

