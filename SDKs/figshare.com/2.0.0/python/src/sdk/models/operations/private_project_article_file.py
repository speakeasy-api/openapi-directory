import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage
from ..shared import privatefile as shared_privatefile


@dataclasses.dataclass
class PrivateProjectArticleFilePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    file_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    project_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'project_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateProjectArticleFileSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateProjectArticleFileRequest:
    path_params: PrivateProjectArticleFilePathParams = dataclasses.field()
    security: PrivateProjectArticleFileSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateProjectArticleFileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    private_file: Optional[shared_privatefile.PrivateFile] = dataclasses.field(default=None)
    
