import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActiveListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_active_list_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
