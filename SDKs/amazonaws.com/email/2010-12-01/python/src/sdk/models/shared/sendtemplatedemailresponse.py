import dataclasses



@dataclasses.dataclass
class SendTemplatedEmailResponse:
    message_id: str = dataclasses.field()
    
