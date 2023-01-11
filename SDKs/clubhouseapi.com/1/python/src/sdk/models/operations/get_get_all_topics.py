import dataclasses



@dataclasses.dataclass
class GetGetAllTopicsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
