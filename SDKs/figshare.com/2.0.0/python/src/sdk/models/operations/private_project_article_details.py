import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import projectarticle as shared_projectarticle


@dataclasses.dataclass
class PrivateProjectArticleDetailsPathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectArticleDetailsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectArticleDetailsRequest:
    path_params: PrivateProjectArticleDetailsPathParams = dataclasses.field()
    security: PrivateProjectArticleDetailsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectArticleDetailsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    project_article: Optional[shared_projectarticle.ProjectArticle] = dataclasses.field(default=None)
    
