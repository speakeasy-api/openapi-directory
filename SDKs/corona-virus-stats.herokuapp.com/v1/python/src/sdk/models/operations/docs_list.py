import dataclasses



@dataclasses.dataclass
class DocsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
