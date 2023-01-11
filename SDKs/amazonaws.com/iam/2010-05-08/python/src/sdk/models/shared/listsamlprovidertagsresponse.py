import dataclasses
from typing import Optional
from ..shared import tag as shared_tag


@dataclasses.dataclass
class ListSamlProviderTagsResponse:
    tags: list[shared_tag.Tag] = dataclasses.field()
    is_truncated: Optional[bool] = dataclasses.field(default=None)
    marker: Optional[str] = dataclasses.field(default=None)
    
