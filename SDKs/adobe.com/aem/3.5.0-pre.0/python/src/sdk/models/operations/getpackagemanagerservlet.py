import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetPackageManagerServletResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_package_manager_servlet_404_text_html_string: Optional[str] = dataclasses.field(default=None)
    get_package_manager_servlet_405_text_html_string: Optional[str] = dataclasses.field(default=None)
    
