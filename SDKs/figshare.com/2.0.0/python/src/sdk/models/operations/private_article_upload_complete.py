import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateArticleUploadCompletePathParams:
    article_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'article_id', 'style': 'simple', 'explode': False }})
    file_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'file_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateArticleUploadCompleteSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateArticleUploadCompleteRequest:
    path_params: PrivateArticleUploadCompletePathParams = dataclasses.field()
    security: PrivateArticleUploadCompleteSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateArticleUploadCompleteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
