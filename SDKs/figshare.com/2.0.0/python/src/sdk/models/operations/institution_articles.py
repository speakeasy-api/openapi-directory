import dataclasses
from typing import Optional
from ..shared import article as shared_article


@dataclasses.dataclass
class InstitutionArticlesPathParams:
    institution_string_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'institution_string_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class InstitutionArticlesQueryParams:
    filename: str = dataclasses.field(metadata={'query_param': { 'field_name': 'filename', 'style': 'form', 'explode': True }})
    resource_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'resource_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class InstitutionArticlesRequest:
    path_params: InstitutionArticlesPathParams = dataclasses.field()
    query_params: InstitutionArticlesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class InstitutionArticlesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[shared_article.Article]] = dataclasses.field(default=None)
    
