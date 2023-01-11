import dataclasses



@dataclasses.dataclass
class SubmitBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
