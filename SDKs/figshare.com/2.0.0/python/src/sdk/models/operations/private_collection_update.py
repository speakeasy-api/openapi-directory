import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import collectionupdate as shared_collectionupdate
from ..shared import errormessage as shared_errormessage


@dataclasses.dataclass
class PrivateCollectionUpdatePathParams:
    collection_id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PrivateCollectionUpdateSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionUpdateRequest:
    path_params: PrivateCollectionUpdatePathParams = dataclasses.field()
    request: shared_collectionupdate.CollectionUpdate = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    security: PrivateCollectionUpdateSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionUpdateResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
