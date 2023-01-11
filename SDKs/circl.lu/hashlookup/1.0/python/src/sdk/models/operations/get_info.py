import dataclasses



@dataclasses.dataclass
class GetInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
