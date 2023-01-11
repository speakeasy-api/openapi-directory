import dataclasses
from typing import Optional


@dataclasses.dataclass
class StoreListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_list_200_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
