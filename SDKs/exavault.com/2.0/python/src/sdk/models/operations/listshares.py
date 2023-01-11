import dataclasses
from typing import Optional
from enum import Enum
from ..shared import sharecollectionresponse as shared_sharecollectionresponse

class ListSharesScopeEnum(str, Enum):
    ALL = "all"
    ACTIVE = "active"
    CURRENT_USER = "currentUser"

class ListSharesSortEnum(str, Enum):
    CREATED = "created"
    MINUS_CREATED = "-created"

class ListSharesTypeEnum(str, Enum):
    RECEIVE = "receive"
    SHARED_FOLDER = "shared_folder"
    SEND = "send"


@dataclasses.dataclass
class ListSharesQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    message: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'message', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    recipient: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'recipient', 'style': 'form', 'explode': True }})
    scope: Optional[ListSharesScopeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    search: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ListSharesSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type: Optional[ListSharesTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSharesHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSharesRequest:
    headers: ListSharesHeaders = dataclasses.field()
    query_params: ListSharesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListSharesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    share_collection_response: Optional[shared_sharecollectionresponse.ShareCollectionResponse] = dataclasses.field(default=None)
    
