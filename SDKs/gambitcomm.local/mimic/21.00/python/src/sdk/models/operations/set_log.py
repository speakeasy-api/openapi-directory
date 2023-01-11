import dataclasses
from typing import Optional


@dataclasses.dataclass
class SetLogRequest:
    request: str = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetLogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_log_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
