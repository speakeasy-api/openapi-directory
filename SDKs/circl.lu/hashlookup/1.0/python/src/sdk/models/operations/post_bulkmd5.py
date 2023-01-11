import dataclasses



@dataclasses.dataclass
class PostBulkmd5Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
