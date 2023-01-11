import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import privateauthorssearch as shared_privateauthorssearch
from ..shared import author as shared_author
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateAuthorsSearchSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateAuthorsSearchRequest:
    security: PrivateAuthorsSearchSecurity = dataclasses.field()
    request: Optional[shared_privateauthorssearch.PrivateAuthorsSearch] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PrivateAuthorsSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    authors: Optional[list[shared_author.Author]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
