import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import category as shared_category
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCategoriesListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCategoriesListRequest:
    security: PrivateCategoriesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCategoriesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
