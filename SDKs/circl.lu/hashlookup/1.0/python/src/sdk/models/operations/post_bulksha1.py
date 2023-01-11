import dataclasses



@dataclasses.dataclass
class PostBulksha1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
