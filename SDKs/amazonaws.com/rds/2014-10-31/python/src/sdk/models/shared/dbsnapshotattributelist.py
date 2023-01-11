import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class DbSnapshotAttributeList:
    r"""DbSnapshotAttributeList
    <p>Contains the name and values of a manual DB snapshot attribute</p> <p>Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code> API.</p>
    """
    
    attribute_name: Optional[str] = dataclasses.field(default=None)
    attribute_values: Optional[list[dict[str, Any]]] = dataclasses.field(default=None)
    
