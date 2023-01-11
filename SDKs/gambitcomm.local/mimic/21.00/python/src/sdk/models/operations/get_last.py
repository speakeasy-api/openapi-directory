import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetLastResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_last_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
