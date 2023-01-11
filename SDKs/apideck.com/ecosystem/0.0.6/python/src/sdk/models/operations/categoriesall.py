import dataclasses
from typing import Optional
from ..shared import getcategoriesresponse as shared_getcategoriesresponse


@dataclasses.dataclass
class CategoriesAllPathParams:
    ecosystem_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CategoriesAllQueryParams:
    cursor: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class CategoriesAllRequest:
    path_params: CategoriesAllPathParams = dataclasses.field()
    query_params: CategoriesAllQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class CategoriesAllResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_categories_response: Optional[shared_getcategoriesresponse.GetCategoriesResponse] = dataclasses.field(default=None)
    
