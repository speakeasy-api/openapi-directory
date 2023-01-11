import dataclasses
from typing import Optional
from ..shared import webhookcollectionresponse as shared_webhookcollectionresponse


@dataclasses.dataclass
class GetWehooksListQueryParams:
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetWehooksListHeaders:
    ev_access_token: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-access-token', 'style': 'simple', 'explode': False }})
    ev_api_key: str = dataclasses.field(metadata={'header': { 'field_name': 'ev-api-key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetWehooksListRequest:
    headers: GetWehooksListHeaders = dataclasses.field()
    query_params: GetWehooksListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetWehooksListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    webhook_collection_response: Optional[shared_webhookcollectionresponse.WebhookCollectionResponse] = dataclasses.field(default=None)
    
