import dataclasses
from typing import Optional


@dataclasses.dataclass
class SendMessageResult:
    r"""SendMessageResult
    The <code>MD5OfMessageBody</code> and <code>MessageId</code> elements.
    """
    
    md5_of_message_attributes: Optional[str] = dataclasses.field(default=None)
    md5_of_message_body: Optional[str] = dataclasses.field(default=None)
    md5_of_message_system_attributes: Optional[str] = dataclasses.field(default=None)
    message_id: Optional[str] = dataclasses.field(default=None)
    sequence_number: Optional[str] = dataclasses.field(default=None)
    
