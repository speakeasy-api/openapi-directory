import dataclasses
from typing import Optional


@dataclasses.dataclass
class MetaGetZenResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    meta_get_zen_200_text_plain_string: Optional[str] = dataclasses.field(default=None)
    
