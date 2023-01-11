import dataclasses



@dataclasses.dataclass
class PostCheckWaitlistStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
