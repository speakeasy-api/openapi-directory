import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DbClusterSnapshotAttributeList:
    r"""DbClusterSnapshotAttributeList
    <p>Contains the name and values of a manual cluster snapshot attribute.</p> <p>Manual cluster snapshot attributes are used to authorize other accounts to restore a manual cluster snapshot.</p>
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None)
    attribute_values: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
