import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import categoriescreator as shared_categoriescreator
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionCategoriesReplacePathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionCategoriesReplaceSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionCategoriesReplaceRequest:
    path_params: PrivateCollectionCategoriesReplacePathParams = dataclasses.field()
    request: shared_categoriescreator.CategoriesCreator = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateCollectionCategoriesReplaceSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionCategoriesReplaceResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
