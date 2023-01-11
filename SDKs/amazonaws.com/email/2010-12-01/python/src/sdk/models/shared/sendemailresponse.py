import dataclasses



@dataclasses.dataclass
class SendEmailResponse:
    r"""SendEmailResponse
    Represents a unique message ID.
    """
    
    message_id: str = dataclasses.field()
    
