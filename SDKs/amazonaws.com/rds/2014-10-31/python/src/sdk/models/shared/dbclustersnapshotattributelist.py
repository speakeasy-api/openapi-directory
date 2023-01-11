import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DbClusterSnapshotAttributeList:
    r"""DbClusterSnapshotAttributeList
    <p>Contains the name and values of a manual DB cluster snapshot attribute.</p> <p>Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None)
    attribute_values: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
