import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import collection as shared_collection
from ..shared import errormessage as shared_errormessage

class PrivateCollectionsListOrderEnum(str, Enum):
    PUBLISHED_DATE = "published_date"
    MODIFIED_DATE = "modified_date"
    VIEWS = "views"
    SHARES = "shares"
    CITES = "cites"

class PrivateCollectionsListOrderDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclasses.dataclass
class PrivateCollectionsListQueryParams:
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    order: Optional[PrivateCollectionsListOrderEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    order_direction: Optional[PrivateCollectionsListOrderDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'order_direction', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PrivateCollectionsListSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class PrivateCollectionsListRequest:
    query_params: PrivateCollectionsListQueryParams = dataclasses.field()
    security: PrivateCollectionsListSecurity = dataclasses.field()
    

@dataclasses.dataclass
class PrivateCollectionsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collections: Optional[list[shared_collection.Collection]] = dataclasses.field(default=None)
    error_message: Optional[shared_errormessage.ErrorMessage] = dataclasses.field(default=None)
    
