import dataclasses



@dataclasses.dataclass
class GetGetChannelsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
