import dataclasses
from typing import Optional
from ..shared import messagelist as shared_messagelist


@dataclasses.dataclass
class ReceiveMessageResult:
    r"""ReceiveMessageResult
    A list of received messages.
    """
    
    messages: Optional[list[shared_messagelist.MessageList]] = dataclasses.field(default=None)
    
