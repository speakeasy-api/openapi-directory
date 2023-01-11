import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetVersionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_version_200_application_json_string: Optional[str] = dataclasses.field(default=None)
    
