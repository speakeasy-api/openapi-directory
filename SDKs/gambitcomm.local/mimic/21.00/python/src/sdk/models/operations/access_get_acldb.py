import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessGetAcldbResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_get_acldb_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
