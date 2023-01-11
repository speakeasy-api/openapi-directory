import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetCfgfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_cfgfile_200_application_json_object: Optional[dict[str, int]] = dataclasses.field(default=None)
    
