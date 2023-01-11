import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AssociateTrunkInterfaceResultInterfaceAssociation:
    r"""AssociateTrunkInterfaceResultInterfaceAssociation
    Information about the association between the trunk network interface and branch network interface.
    """
    
    association_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    branch_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    gre_key: Optional[dict[str, Any]] = dataclasses.field(default=None)
    interface_protocol: Optional[dict[str, Any]] = dataclasses.field(default=None)
    tags: Optional[dict[str, Any]] = dataclasses.field(default=None)
    trunk_interface_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    vlan_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class AssociateTrunkInterfaceResult:
    client_token: Optional[dict[str, Any]] = dataclasses.field(default=None)
    interface_association: Optional[AssociateTrunkInterfaceResultInterfaceAssociation] = dataclasses.field(default=None)
    
