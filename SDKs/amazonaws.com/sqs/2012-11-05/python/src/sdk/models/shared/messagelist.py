import dataclasses
from typing import Optional
from ..shared import messageattributevalue as shared_messageattributevalue


@dataclasses.dataclass
class MessageList:
    r"""MessageList
    An Amazon SQS message.
    """
    
    attributes: Optional[dict[str, str]] = dataclasses.field(default=None)
    body: Optional[str] = dataclasses.field(default=None)
    md5_of_body: Optional[str] = dataclasses.field(default=None)
    md5_of_message_attributes: Optional[str] = dataclasses.field(default=None)
    message_attributes: Optional[dict[str, shared_messageattributevalue.MessageAttributeValue]] = dataclasses.field(default=None)
    message_id: Optional[str] = dataclasses.field(default=None)
    receipt_handle: Optional[str] = dataclasses.field(default=None)
    
