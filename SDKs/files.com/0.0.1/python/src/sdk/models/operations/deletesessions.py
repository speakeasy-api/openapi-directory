import dataclasses



@dataclasses.dataclass
class DeleteSessionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
