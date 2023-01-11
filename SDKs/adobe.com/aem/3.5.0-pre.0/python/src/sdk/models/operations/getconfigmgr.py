import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetConfigMgrResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_config_mgr_200_text_xml_string: Optional[str] = dataclasses.field(default=None)
    
