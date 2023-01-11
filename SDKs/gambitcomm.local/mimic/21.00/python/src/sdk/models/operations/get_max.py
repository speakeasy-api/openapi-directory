import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMaxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_max_200_application_json_int32_integer: Optional[int] = dataclasses.field(default=None)
    
