import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAemProductInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_aem_product_info_default_application_json_strings: Optional[list[str]] = dataclasses.field(default=None)
    
