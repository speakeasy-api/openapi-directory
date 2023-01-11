import dataclasses
from typing import Optional


@dataclasses.dataclass
class SendBounceResponse:
    r"""SendBounceResponse
    Represents a unique message ID.
    """
    
    message_id: Optional[str] = dataclasses.field(default=None)
    
