import dataclasses



@dataclasses.dataclass
class APIKeyDeleteCurrentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
