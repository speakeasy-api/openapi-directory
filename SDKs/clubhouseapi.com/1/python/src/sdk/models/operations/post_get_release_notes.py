import dataclasses



@dataclasses.dataclass
class PostGetReleaseNotesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
