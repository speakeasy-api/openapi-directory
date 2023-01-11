import dataclasses



@dataclasses.dataclass
class GetGetWelcomeChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
