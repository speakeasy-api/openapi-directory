import dataclasses
from enum import Enum

class DirectConnectGatewayAssociationProposalStateEnum(str, Enum):
    REQUESTED = "requested"
    ACCEPTED = "accepted"
    DELETED = "deleted"

