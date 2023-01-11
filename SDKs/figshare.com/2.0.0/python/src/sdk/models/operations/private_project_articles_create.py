import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import articleprojectcreate as shared_articleprojectcreate
from ..shared import errormessage as shared_errormessage
from ..shared import location as shared_location


@dataclasses.dataclass
class PrivateProjectArticlesCreatePathParams:
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectArticlesCreateQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrivateProjectArticlesCreateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectArticlesCreateRequest:
    path_params: PrivateProjectArticlesCreatePathParams = dataclasses.field()
    query_params: PrivateProjectArticlesCreateQueryParams = dataclasses.field()
    request: shared_articleprojectcreate.ArticleProjectCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateProjectArticlesCreateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectArticlesCreateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    location: Optional[shared_location.Location] = dataclasses.field(default=None)
    
