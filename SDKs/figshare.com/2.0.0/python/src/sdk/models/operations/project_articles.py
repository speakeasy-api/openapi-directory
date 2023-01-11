import dataclasses
from typing import Optional
from ..shared import article as shared_article


@dataclasses.dataclass
class ProjectArticlesPathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ProjectArticlesRequest:
    path_params: ProjectArticlesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ProjectArticlesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    articles: Optional[list[shared_article.Article]] = dataclasses.field(default=None)
    
