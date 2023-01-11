import dataclasses
from typing import Optional
from enum import Enum
from ..shared import security as shared_security
from ..shared import collection as shared_collection
from ..shared import flaterrorresponse as shared_flaterrorresponse

class ListCollectionsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class ListCollectionsSortEnum(str, Enum):
    CREATION_DATE = "creationDate"
    TITLE = "title"


@dataclasses.dataclass
class ListCollectionsQueryParams:
    direction: Optional[ListCollectionsDirectionEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    next: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'next', 'style': 'form', 'explode': True }})
    parent: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    previous: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'previous', 'style': 'form', 'explode': True }})
    sort: Optional[ListCollectionsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCollectionsSecurity:
    o_auth2: shared_security.SchemeOAuth2 = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclasses.dataclass
class ListCollectionsRequest:
    query_params: ListCollectionsQueryParams = dataclasses.field()
    security: ListCollectionsSecurity = dataclasses.field()
    

@dataclasses.dataclass
class ListCollectionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    collections: Optional[list[shared_collection.Collection]] = dataclasses.field(default=None)
    flat_error_response: Optional[shared_flaterrorresponse.FlatErrorResponse] = dataclasses.field(default=None)
    
