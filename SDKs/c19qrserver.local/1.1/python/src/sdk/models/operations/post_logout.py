import dataclasses



@dataclasses.dataclass
class PostLogoutResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
