import dataclasses



@dataclasses.dataclass
class SendRawEmailResponse:
    r"""SendRawEmailResponse
    Represents a unique message ID.
    """
    
    message_id: str = dataclasses.field()
    
