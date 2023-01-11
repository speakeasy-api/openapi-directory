import dataclasses
from typing import Optional
from ..shared import zone_info as shared_zone_info


@dataclasses.dataclass
class GetInfoTldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    zone_infos: Optional[list[shared_zone_info.ZoneInfo]] = dataclasses.field(default=None)
    
