import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class ReplaceRouteTableAssociationResultAssociationState:
    r"""ReplaceRouteTableAssociationResultAssociationState
    The state of the association.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ReplaceRouteTableAssociationResult:
    association_state: Optional[ReplaceRouteTableAssociationResultAssociationState] = dataclasses.field(default=None)
    new_association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
