import dataclasses
from typing import Optional
from ..shared import emaillistcollectionresponse as shared_emaillistcollectionresponse


@dataclasses.dataclass
class GetEmailListsQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetEmailListsHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetEmailListsRequest:
    headers: GetEmailListsHeaders = dataclasses.field()
    query_params: GetEmailListsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetEmailListsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    email_list_collection_response: Optional[shared_emaillistcollectionresponse.EmailListCollectionResponse] = dataclasses.field(default=None)
    
