import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetCrxdeStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_crxde_status_200_plain_text_string: Optional[str] = dataclasses.field(default=None)
    get_crxde_status_404_plain_text_string: Optional[str] = dataclasses.field(default=None)
    
