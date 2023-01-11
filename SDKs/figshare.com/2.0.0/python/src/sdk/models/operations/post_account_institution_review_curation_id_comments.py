import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import curationcommentcreate as shared_curationcommentcreate
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PostAccountInstitutionReviewCurationIDCommentsPathParams:
    curation_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'curation_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAccountInstitutionReviewCurationIDCommentsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PostAccountInstitutionReviewCurationIDCommentsRequest:
    path_params: PostAccountInstitutionReviewCurationIDCommentsPathParams = dataclasses.field()
    request: shared_curationcommentcreate.CurationCommentCreate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostAccountInstitutionReviewCurationIDCommentsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PostAccountInstitutionReviewCurationIDCommentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
