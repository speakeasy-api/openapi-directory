import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetCfgFileChangedResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_cfg_file_changed_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    
