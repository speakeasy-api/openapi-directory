import dataclasses
from typing import Optional
from ..shared import category as shared_category


@dataclasses.dataclass
class CategoriesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None)
    
