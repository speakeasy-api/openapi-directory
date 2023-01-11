import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateRouteTableResultAssociationState:
    r"""AssociateRouteTableResultAssociationState
    The state of the association.
    """
    
    state: Optional[dict[str, Any]] = dataclasses.field(default=None)
    status_message: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateRouteTableResult:
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    association_state: Optional[AssociateRouteTableResultAssociationState] = dataclasses.field(default=None)
    
