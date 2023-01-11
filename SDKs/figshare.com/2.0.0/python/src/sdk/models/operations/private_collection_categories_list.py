import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import category as shared_category
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionCategoriesListPathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionCategoriesListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionCategoriesListRequest:
    path_params: PrivateCollectionCategoriesListPathParams = dataclasses.field()
    security: PrivateCollectionCategoriesListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionCategoriesListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    categories: Optional[list[shared_category.Category]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
