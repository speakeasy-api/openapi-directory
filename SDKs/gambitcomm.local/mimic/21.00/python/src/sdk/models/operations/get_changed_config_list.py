import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetChangedConfigListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_changed_config_list_200_application_json_int32_integers: Optional[list[int]] = dataclasses.field(default=None)
    
