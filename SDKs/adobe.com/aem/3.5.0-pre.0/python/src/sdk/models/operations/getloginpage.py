import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetLoginPageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_login_page_default_text_html_string: Optional[str] = dataclasses.field(default=None)
    
