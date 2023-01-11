import dataclasses
from typing import Optional
from ..shared import getcategoryresponse as shared_getcategoryresponse


@dataclasses.dataclass
class CategoriesOnePathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CategoriesOneRequest:
    path_params: CategoriesOnePathParams = dataclasses.field()
    

@dataclasses.dataclass
class CategoriesOneResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_category_response: Optional[shared_getcategoryresponse.GetCategoryResponse] = dataclasses.field(default=None)
    
