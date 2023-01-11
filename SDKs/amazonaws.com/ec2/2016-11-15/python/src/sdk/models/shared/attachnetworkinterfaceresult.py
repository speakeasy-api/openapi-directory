import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class AttachNetworkInterfaceResult:
    r"""AttachNetworkInterfaceResult
    Contains the output of AttachNetworkInterface.
    """
    
    attachment_id: Optional[dict[str, Any]] = dataclasses.field(default=None)
    network_card_index: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
