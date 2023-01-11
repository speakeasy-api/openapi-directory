import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import author as shared_author
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionAuthorsListPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionAuthorsListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionAuthorsListRequest:
    path_params: PrivateCollectionAuthorsListPathParams = dataclasses.field()
    security: PrivateCollectionAuthorsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionAuthorsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authors: Optional[list[shared_author.Author]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
