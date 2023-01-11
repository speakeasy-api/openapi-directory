import dataclasses
from enum import Enum

class DirectConnectGatewayAssociationStateEnum(str, Enum):
    ASSOCIATING = "associating"
    ASSOCIATED = "associated"
    DISASSOCIATING = "disassociating"
    DISASSOCIATED = "disassociated"
    UPDATING = "updating"

