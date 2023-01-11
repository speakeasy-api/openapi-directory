import dataclasses
from typing import Optional


@dataclasses.dataclass
class AccessGetAdmindirResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    access_get_admindir_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
