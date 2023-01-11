import dataclasses
from typing import Optional


@dataclasses.dataclass
class StoreSaveResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    store_save_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    
